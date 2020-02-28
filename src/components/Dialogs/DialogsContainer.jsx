import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        props.store.dispatch(updateNewMessageBodyCreator(e));
    }

    return <Dialogs 
    sendMessage={onSendMessage} 
    updateNewMessageBody={onMessageChange} 
    messageBody={state.dialogsPage.messageBody}
    dialogs={state.dialogsPage.dialogs}
    messages={state.dialogsPage.messages} />
}

export default DialogsContainer;