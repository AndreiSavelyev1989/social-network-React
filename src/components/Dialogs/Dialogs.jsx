import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <Message message={m.message} />)


    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>

                {dialogElements}

            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}  value={props.messageBody} placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick = {onSendMessage}>Send Message</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs;