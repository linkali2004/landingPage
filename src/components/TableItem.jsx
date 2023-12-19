import React from 'react'
import StackedText from './StackedText'

export default function TableItem({text,subtext}) {
  return (
    <td className="px-6 py-4">
    <StackedText text={text} subtext={subtext}></StackedText>
   </td>
  )
}
