/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom'

type ItemSideBarProps = {
  name: string
  to: string
  svg: Function
}

export default function ItemSideBar({ name, to, svg }: ItemSideBarProps) {
  return (
    <li>
      <Link
        to={to}
        className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
      >
        {svg()}
        <span className='ms-3 flex-1 whitespace-nowrap'>{name}</span>
        {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
          Pro
        </span> */}
        {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          3
        </span> */}
      </Link>
    </li>
  )
}
