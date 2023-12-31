import React from 'react'
import "../output.css";
import StackedText from './StackedText';

export default function TableColumnBig({sign , text,subtext , background}) {
   let backgroundColor = background;
  return (
     <div class = "p-4 flex justify-between gap-[6px]" style={{backgroundColor:background}}>
        <div className='p-2' style={{border:"1px solid #58D6A9"}}>
            <p style={{color:"#58D6A9"}}>{sign}</p>
        </div>
        <StackedText text={text} subtext={subtext}></StackedText>
     </div>
  )
}
