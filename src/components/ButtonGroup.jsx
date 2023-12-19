import React, { useState } from 'react'
import Button from './Button'

export default function ButtonGroup() {
    let [currentColor , setCurrentColor] = useState({btn1:"white" , btn2:"#192438"})
    function changeColorHandler()
    {
       
        if(currentColor.btn1 === "white"  && currentColor.btn2 === "#192438")
        {
            setCurrentColor({btn2:"white" , btn1:"#192438"})
        }
        if(currentColor.btn1 === "#192438" && currentColor.btn2 == "white")
        {
            setCurrentColor({btn2:"#192438" , btn1:"white"})
        }
        
    }
  return (
   <>
           <Button text="Active" background={currentColor.btn1} onClick = {changeColorHandler}></Button>
           <Button text="Inactive" background={currentColor.btn2} onClick = {changeColorHandler}></Button>
   </>
  )
}
