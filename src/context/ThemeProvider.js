import { useState } from "react";
import { ThemeContext } from "./ThemeContext"


const ThemeProvider = ({ children }) => {

    
    const [checked, setChecked]=useState(false);
  
  
    const handleNight=()=>{

    setChecked(!checked);
    
    }



  return (
    <ThemeContext.Provider value={{ checked, handleNight }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider