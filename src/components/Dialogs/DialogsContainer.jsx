import { sendMessage, updateNewMessageBody } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageBody: state.dialogsPage.messageBody,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
    withAuthRedirect
)(Dialogs)
