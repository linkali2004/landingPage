import React from 'react'
import "../output.css"
import Comp1 from './Comp1'
import TableColumnBig from './TableColumnBig'
import Button from './Button'
import { FiGrid } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
export default function Table() {
  return (
<>
<div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className="py-4 flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col gap-[30px] px-1" >
    <div className="relative mt-1">
	<div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
		<BsSearch color='#ADC9FF' size="14px"></BsSearch>
		</div>
      <input type="text" id="table-search" style={{color: "#ADC9FF" , backgroundColor:"transparent"}} className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
      </div>
      <div className='flex gap-[54px] justify-between'>
	  <div>
           <Button text="Active" background="white" ></Button>
           <Button text="Inactive" background="#192438"></Button>
           </div>
           <div className='flex justify-between gap-[24px]'>
           <FiGrid color='#ADC9FF' size="24px"></FiGrid>
		   <BsList color = "#ADC9FF" size="25px"></BsList>
           </div>
      </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-400 uppercase" style={{borderBottom:"1px solid #ADC9FF"}}>
        <tr>

          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Maturity
          </th>
          <th scope="col" className="px-6 py-3">
            Underlying APY price
          </th>
          <th scope="col" className="px-6 py-3">
            Implied APY
          </th>
          <th scope="col" className="px-6 py-3">
           LongYield APY 
                 YT Price
          </th>
          <th scope="col" className="px-6 py-3">
           Fixed APY 
                 YT Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{borderBottom:"1px solid #ADC9FF" , backgroundColor:"#FFFFFF0A"}}>
  
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <Comp1 text="stATOM" subtext="26 Dec 2024" />
          </th>
          <td className="px-6 py-4">
           <Comp1 text="26 Sept 2024" subtext="303 Days"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="18.63%" subtext="$0.778"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="10.03%" subtext=""></Comp1>
          </td>
          <td className="px-6 py-4">
          <TableColumnBig sign="YT" text="121.07%" subtext="$0.07545" background = "#38485F"></TableColumnBig>
          </td>
          <td className="px-5 py-4">
          <TableColumnBig sign="PT" text="10.07%" subtext="$0.7545" background="#1B393C"></TableColumnBig>
          </td>
        </tr>
		<tr style={{borderBottom:"1px solid #ADC9FF" , backgroundColor:"#FFFFFF0A"}}>
  
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <Comp1 text="stATOM" subtext="26 Dec 2024" />
          </th>
          <td className="px-6 py-4">
           <Comp1 text="26 Sept 2024" subtext="303 Days"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="18.63%" subtext="$0.778"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="10.03%" subtext=""></Comp1>
          </td>
          <td className="px-6 py-4">
          <TableColumnBig sign="YT" text="121.07%" subtext="$0.07545" background = "#38485F"></TableColumnBig>
          </td>
          <td className="px-5 py-4">
          <TableColumnBig sign="PT" text="10.07%" subtext="$0.7545" background="#1B393C"></TableColumnBig>
          </td>
        </tr>
		<tr style={{borderBottom:"1px solid #ADC9FF" , backgroundColor:"#FFFFFF0A"}}>
  
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <Comp1 text="stATOM" subtext="26 Dec 2024" />
          </th>
          <td className="px-6 py-4">
           <Comp1 text="26 Sept 2024" subtext="303 Days"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="18.63%" subtext="$0.778"></Comp1>
          </td>
          <td className="px-6 py-4">
          <Comp1 text="10.03%" subtext=""></Comp1>
          </td>
          <td className="px-6 py-4">
          <TableColumnBig sign="YT" text="121.07%" subtext="$0.07545" background = "#38485F"></TableColumnBig>
          </td>
          <td className="px-5 py-4">
          <TableColumnBig sign="PT" text="10.07%" subtext="$0.7545" background="#1B393C"></TableColumnBig>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</>
  )
}
