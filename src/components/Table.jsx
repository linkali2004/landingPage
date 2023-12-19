import React from 'react'
import "../output.css"
import Comp1 from './StackedText'
import TableColumnBig from './TableColumnBig'
import Search from './Search';
import TableItem from './TableItem';
import Tableheading from './Tableheading';
export default function Table() {
  return (
<>
<div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className="py-4 flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col gap-[30px] px-1" >
  <Search></Search>
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
  
          <Tableheading text="stATOM" subtext="26 Dec 2024"></Tableheading>
          <TableItem text="26 Sept 2024" subtext="303 Days"></TableItem>
          <TableItem text="18.63%" subtext="$0.778"></TableItem>
          <TableItem text="10.03%" subtext=""></TableItem>
          <td className="px-6 py-4">
          <TableColumnBig sign="YT" text="121.07%" subtext="$0.07545" background = "#38485F"></TableColumnBig>
          </td>
          <td className="px-5 py-4">
          <TableColumnBig sign="PT" text="10.07%" subtext="$0.7545" background="#1B393C"></TableColumnBig>
          </td>
        </tr>
        <tr style={{borderBottom:"1px solid #ADC9FF" , backgroundColor:"#FFFFFF0A"}}>
  
  <Tableheading text="stATOM" subtext="26 Dec 2024"></Tableheading>
  <TableItem text="26 Sept 2024" subtext="303 Days"></TableItem>
  <TableItem text="18.63%" subtext="$0.778"></TableItem>
  <TableItem text="10.03%" subtext=""></TableItem>
  <td className="px-6 py-4">
  <TableColumnBig sign="YT" text="121.07%" subtext="$0.07545" background = "#38485F"></TableColumnBig>
  </td>
  <td className="px-5 py-4">
  <TableColumnBig sign="PT" text="10.07%" subtext="$0.7545" background="#1B393C"></TableColumnBig>
  </td>
</tr>
<tr style={{borderBottom:"1px solid #ADC9FF" , backgroundColor:"#FFFFFF0A"}}>
  
  <Tableheading text="stATOM" subtext="26 Dec 2024"></Tableheading>
  <TableItem text="26 Sept 2024" subtext="303 Days"></TableItem>
  <TableItem text="18.63%" subtext="$0.778"></TableItem>
  <TableItem text="10.03%" subtext=""></TableItem>
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
