import React from 'react'

export default function StackedText({text , subtext}) {
  return (
      <>
      <div>
      <p style={{color:"white"}}>{text}</p>
      <p style={{color:"#ADC9FF" , fontSize:"11px"}}>{subtext}</p>
      </div>
      </>
  )
}
