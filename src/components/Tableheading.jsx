import React from 'react'
import StackedText from './StackedText'

export default function Tableheading({text,subtext}) {
  return (
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    <StackedText text={text} subtext={subtext}></StackedText>
  </th>
  )
}
