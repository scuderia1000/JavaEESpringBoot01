import {SUBSCRIBE} from '../constants/AppConst';

const initState = {};

export default (state = initState , action) => {
    switch (action.type) {
        case SUBSCRIBE.MESSAGE.GREETINGS: {
            return {
                ...state,
                received_message: action.payload
            }
        }
        default:
            return state
    }
}