import * as socketActions from '../actions/socketActions';
import * as types from '../constants/AppConst';
import Stomp from 'stompjs';

let socket = null;
let stompClient = null;
let subscription = null;

const onOpen = (store, token) => evt => {
    console.log('WS is onOpen');
    console.log('token ' + token);
    console.log('evt ' + evt.data);
    store.dispatch(socketActions.socketsConnected());
};

const onClose = (store) => evt => {
    console.log('WS is onClose');
    console.log('evt ' + evt.data);
    store.dispatch(socketActions.socketsDisconnect());
};

export const wsMiddleware = store => next => action => {

    const onMessage = (message) => {
        // Parse the JSON message received on the websocket
        const msg = JSON.parse(message.body).content;
        store.dispatch(socketActions.socketsMessageReceiving(msg));

        store.dispatch({type: message.headers.destination, payload: msg});
        subscription.unsubscribe();
        subscription = null;
    };

    switch (action.type) {

        case types.SOCKETS_CONNECT:
            if (socket !== null) {
                console.log('SOCKETS_DISCONNECTING');
                store.dispatch(socketActions.socketsDisconnecting());
                socket.close();
                store.dispatch(socketActions.socketsDisconnected());
            }
            console.log('SOCKETS_CONNECTING');
            store.dispatch(socketActions.socketsConnecting);
            socket = new WebSocket('ws://localhost:8080/hello/websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                store.dispatch(socketActions.socketsConnected());
            });
            break;

        case types.SOCKETS_DISCONNECT:
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            console.log("Disconnected");
            stompClient = null;
            store.dispatch(socketActions.socketsDisconnected());
            break;

        case types.SOCKETS_MESSAGE_SEND:
            subscription = stompClient.subscribe(action.payload.subscribe, onMessage);
            stompClient.send(action.payload.api, {}, JSON.stringify({'name': action.payload.data}));
            // subscription.unsubscribe();
            // socket.send(action.message_send);
            store.dispatch(socketActions.socketsMessageSending(action.payload.data));
            break;
        default:
            return next(action);
    }
};
