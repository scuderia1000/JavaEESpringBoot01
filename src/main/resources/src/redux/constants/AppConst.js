export const SOCKETS_CONNECTING = 'SOCKETS_CONNECTING';
export const SOCKETS_CONNECT = 'SOCKETS_CONNECT';
export const SOCKETS_CONNECTED = 'SOCKETS_CONNECTED';
export const SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING';
export const SOCKETS_DISCONNECT = 'SOCKETS_DISCONNECT';
export const SOCKETS_DISCONNECTED = 'SOCKETS_DISCONNECTED';
export const SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING';
export const SOCKETS_MESSAGE_SEND = 'SOCKETS_MESSAGE_SEND';
export const SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING';
export const SOCKETS_MESSAGE_RECEIVE = 'SOCKETS_MESSAGE_RECEIVE';

export const API = {
    HELLO: {
        SAY_HELLO: '/app/hello'
    },
    USER: {
        GET_USERS: '/app/users/getUsers'
    }
};

export const SUBSCRIBE = {
    MESSAGE: {
        GREETINGS: '/topic/greetings'
    },
    USER: {
        USERS_INFO: '/allUsers/info'
    }
};