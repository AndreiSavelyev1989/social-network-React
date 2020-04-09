import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect(() => {
    setStatus(props.status);
}, [props.status])

const activateEditMode = () => {
    setEditMode(true);
}

const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}

const onStatusChange = (e) => {
    setStatus(e.target.value)
}
    return (
        <div className={styles.status}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }

            {editMode &&
                <div>
                    <input  autoFocus={true}  onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;