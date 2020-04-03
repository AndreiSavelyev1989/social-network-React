import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';


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

            <AddMessageForm onSubmit={addNewMessage}/>
        </div>

    )
}

export default Dialogs;