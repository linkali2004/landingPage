import React from 'react'
import "../output.css";
export default function Button({text , background , borderColor}) {
    let backgroundColor = background;
    let styleDecided = "rounded-full px-3 py-1 m-0"
  return (
    <button className={styleDecided} style={{background , fontSize:"15px" , color:"#799ce0"}}>{text}</button>
  )
}
