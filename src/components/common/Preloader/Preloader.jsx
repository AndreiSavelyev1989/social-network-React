
import  React  from 'react';
import preloader from '../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {

    return <div>
        <img src={preloader} className={styles.preloader}/>
        <span className={styles.preloaderText} >Loading... </span>
        
    </div>
     

}

export default Preloader;