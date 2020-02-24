import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <img src="http://aniavatars.com/data/avatars/38/967.jpg" alt="avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;