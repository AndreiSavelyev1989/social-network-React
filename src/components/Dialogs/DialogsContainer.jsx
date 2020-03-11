import { sendMessage, updateNewMessageBody } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageBody: state.dialogsPage.messageBody,
    }
}


const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(Dialogs);

export default DialogsContainer;