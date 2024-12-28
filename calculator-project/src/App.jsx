import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display_container  from './component/Display_container'
import Button_container from './component/Button_container.jsx'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [calval,setCalVal] = useState("");

  const onButtonClick =(buttonText)=>
  {
    if(buttonText === "c")
    {
      setCalVal("");
    }else if(buttonText ==="=")
    {
      const result = eval(calval);
      setCalVal(result);
    }else{
      const newDisplayValue = calval+buttonText;
      setCalVal(newDisplayValue);
    }
  };

 return <div>

      <div className={styles.container}>
        <Display_container displayvalue={calval}></Display_container>
        <Button_container onButtonClick={onButtonClick}></Button_container>
      </div>
 </div> 
}
export default App
