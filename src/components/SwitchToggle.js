
import { useContext } from "react"
import ReactSwitch from "react-switch"
import { ThemeContext } from "../context/ThemeContext";

import { MdOutlineDarkMode,MdLight } from 'react-icons/md'
  

export const SwitchToggle = () => {

     const {checked,handleNight}=useContext(ThemeContext);


     console.log(checked);
  return (
    <>
      <ReactSwitch
      className="ml-2"
      checked={checked}
      onChange={handleNight}
      checkedIcon={<MdLight className="w-6 h-6 text-[#FACC02]"/>}
      uncheckedIcon={<MdOutlineDarkMode className="w-6 h-6 text-primary-200"/>}
      onColor='#e4e4e4'
      offColor="#111111"
      onHandleColor="#335e57"
      offHandleColor="#FACC02"
      />
   
    </>
  )
}

export default SwitchToggle