const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 4,
                message: state.messageBody
            }
            state.messageBody = '';
            state.messages.push(body);
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.messageBody = action.newBody;
            return state;

        default: return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body
})


export default dialogsReducer;