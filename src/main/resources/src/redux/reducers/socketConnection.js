import * as types from '../constants/AppConst';

const initState = {
    loaded: false,
    message: 'Just created',
    connected: false,
    history: [],
    message_history: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.SOCKETS_CONNECTING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Connecting...',
                connected: false,
                history: [
                    ...state.history,
                    {
                        loaded: true,
                        message: 'Connecting...',
                        connected: false
                    }
                ]
            });
        case types.SOCKETS_CONNECTED:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Connected. All system online.',
                connected: true,
                history: [
                    ...state.history,
                    {
                        loaded: true,
                        message: 'Connecting...',
                        connected: false
                    }
                ]
            });
        case types.SOCKETS_DISCONNECTING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Disconnecting...',
                connected: true,
                history: [
                    ...state.history,
                    {
                        loaded: true,
                        message: 'Disconnecting...',
                        connected: true
                    }
                ]
            });
        case types.SOCKETS_DISCONNECTED:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Disconnected',
                connected: false,
                history: [
                    ...state.history,
                    {
                        loaded: true,
                        message: 'Disconnected',
                        connected: false
                    }
                ]
            });
        case types.SOCKETS_MESSAGE_SENDING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Send message',
                connected: true,
                message_history: [
                    ...state.message_history,
                    {
                        direction: '->',
                        message: action.message_send
                    }
                ]
            });
        case types.SOCKETS_MESSAGE_RECEIVING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Message receive',
                connected: true,
                message_history: [
                    ...state.message_history,
                    {
                        direction: '<-',
                        message: action.message_receive
                    }
                ]
            });
        default:
            return state;
    }
}