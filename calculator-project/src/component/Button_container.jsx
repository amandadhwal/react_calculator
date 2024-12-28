import styles from './Button.module.css';
function Button_container({onButtonClick})
{
    const btnname=["c","1","2","+","3","4","-","5","6","*","7","8","/","9","0",".","="];

    return <div className={styles.buttonContainer}>
        {btnname.map((item)=><button className={styles.button} onClick={()=>onButtonClick(item)}>{item}</button>)}
        {/* {btnname.map(buttonName=><button className={styles.button}>{buttonName}</button>)} */}
          </div>

}
export default Button_container;