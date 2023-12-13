/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { Link, Outlet, redirect } from 'react-router-dom'
import { PathRoute } from '../../constants/PathRoute'

function Authorization() {
  const [indexTab, setIndexTab] = useState(0)
  const styleNonActive =
    'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
  const styleActive =
    'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
  useEffect(() => {
    redirect(PathRoute.authorization + PathRoute.authorization_user_group)
  })
  const moveTap = (index: number) => {
    setIndexTab(index)
  }
  return (
    <>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(0)}
              to={PathRoute.authorization + PathRoute.authorization_user_group}
              className={indexTab == 0 ? styleActive : styleNonActive}
            >
              User Group
            </Link>
          </li>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(1)}
              to={PathRoute.authorization + PathRoute.authorization_user_group}
              className={indexTab == 1 ? styleActive : styleNonActive}
            >
              Role
            </Link>
          </li>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(2)}
              to={PathRoute.authorization + PathRoute.authorization_user_group}
              className={indexTab == 2 ? styleActive : styleNonActive}
            >
              Permission
            </Link>
          </li>
        </ul>
      </div>
      <div className='select-none'>
        <Outlet />
      </div>
    </>
  )
}

export default Authorization
