import React from 'react'
import "../output.css";
export default function Button({text , background , onClick}) {
    let backgroundColor = background;
    let styleDecided = "rounded-full px-3 py-1 m-0 transition ease-in-out"
  return (
    <button className={styleDecided} style={{background , fontSize:"15px" , color:"#799ce0" ,"&:hover":{color:"black"}}} onClick={onClick}>{text}</button>
  )
}
