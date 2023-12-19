import React from 'react'
import "../output.css";
import { BsList, BsSearch } from 'react-icons/bs';
import ButtonGroup from './ButtonGroup';
import { FiGrid } from 'react-icons/fi';
export default function Search() {
  return (
   <>
    <div className="relative mt-1">
	<div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
		<BsSearch color='#ADC9FF' size="14px"></BsSearch>
		</div>
      <input type="text" id="table-search" style={{color: "#ADC9FF" , backgroundColor:"transparent"}} className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
      </div>
      <div className='flex gap-[54px] justify-between'>
	  <div>
           <ButtonGroup></ButtonGroup>
           </div>
           <div className='flex justify-between gap-[24px]'>
           <FiGrid color='#ADC9FF' size="24px"></FiGrid>
		   <BsList color = "#ADC9FF" size="25px"></BsList>
           </div>
      </div>
   </>
  )
}
