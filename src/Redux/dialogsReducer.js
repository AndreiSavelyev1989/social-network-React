const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Victor' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What a wonderful day.' },
    ],
    messageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 4,
                message: state.messageBody
            }
            return {
                ...state,
                messageBody: '',
                messages: [...state.messages, body]
            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messageBody: action.newBody
            };

        default: return state;

    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body
})


export default dialogsReducer;