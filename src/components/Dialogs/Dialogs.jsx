import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messageElements = props.messages.map(m => <Message message={m.message} key={m.id} />)


    let addNewMessage = (values) => {
      props.sendMessage(values.messageBody);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>

                {dialogElements}

            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = 'textarea' name = 'messageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;