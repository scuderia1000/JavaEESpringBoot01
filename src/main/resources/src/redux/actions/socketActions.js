import * as types from '../constants/AppConst';
import store from '../ReduxStore';

export const socketsConnecting = () => {
    return {type: types.SOCKETS_CONNECTING};
};
export const socketsConnect = () => {
    return {type: types.SOCKETS_CONNECT};
};
export const socketsConnected= () => {
    return {type: types.SOCKETS_CONNECTED};
};
export const socketsDisconnecting= () => {
    return {type: types.SOCKETS_DISCONNECTING};
};
export const socketsDisconnect= () => {
    return {type: types.SOCKETS_DISCONNECT};
};
export const socketsDisconnected= () => {
    return {type: types.SOCKETS_DISCONNECTED};
};
export const socketsMessageSending =(sendMessage) => {
    return {type: types.SOCKETS_MESSAGE_SENDING, message_send: sendMessage};
};

export const socketsMessageReceiving = (receiveMessage) => {
    return {type: types.SOCKETS_MESSAGE_RECEIVING, message_receive: receiveMessage};
};

const socketsMessageSend = (data, api, subscribe) => {
    return {
        type: types.SOCKETS_MESSAGE_SEND,
        payload: {
            api,
            subscribe,
            data
        }
    };
};

export const SocketAction = {
  send_message: {
      say_hello: function (data, api, subscribe) {
          store.dispatch(socketsMessageSend(data, api, subscribe))
      }
  }  
};