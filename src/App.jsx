import { useState } from 'react'
import './output.css'
import Subheading from './components/Subheading'
import Table from './components/Table'

function App() {

  return (
    <>
    <div className='h-100 w-100 px-5 pt-10 pb-4' style={{backgroundColor:"#1F2736"}}>
      <div className = "pt-4 flex gap-2 flex-col" >
        <p className = "text-3xl text-white margin-0" style={{fontFamily:"manrope"}}>Markets</p>
          <div>
          <Subheading text="Exit anytime at market prices"></Subheading>
        <Subheading text="Simple and secure."></Subheading>
        <Subheading text="Simple and secure."></Subheading>
          </div>
      </div>

       
<Table></Table>

    </div>
    </>
  )
}

export default App
