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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 4,
                message: action.messageBody
            }
            return {
                ...state,
                messages: [...state.messages, body]
            };

        default: return state;

    }
}

export const sendMessage = (messageBody) => ({ type: SEND_MESSAGE, messageBody })


export default dialogsReducer;