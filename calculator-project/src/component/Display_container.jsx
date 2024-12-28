import styles from './Display.module.css';
function Display_container({displayvalue})
{
    return <input className={styles.display} type='text' value={displayvalue} readOnly/>

}
export default Display_container;