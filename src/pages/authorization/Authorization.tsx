/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PathRoute } from '../../constants/PathRoute'
import classNames from 'classnames'

function Authorization() {
  const [indexTab, setIndexTab] = useState(0)
  const location = useLocation()
  const nav = useNavigate()
  const moveTap = (index: number) => {
    setIndexTab(index)
  }
  useEffect(() => {
    if (location.pathname === PathRoute.authorization) {
      nav(PathRoute.authorization + PathRoute.authorization_user_group)
    }
  }, [])
  return (
    <>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(0)}
              to={PathRoute.authorization + PathRoute.authorization_user_group}
              className={classNames('inline-block p-4 border-b-2', {
                'text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500':
                  indexTab == 0,
                'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                  indexTab != 0
              })}
            >
              User Group
            </Link>
          </li>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(1)}
              to={PathRoute.authorization + PathRoute.authorization_role}
              className={classNames('inline-block p-4 border-b-2', {
                'text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500':
                  indexTab == 1,
                'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                  indexTab != 1
              })}
            >
              Role
            </Link>
          </li>
          <li className='me-2'>
            <Link
              onClick={() => moveTap(2)}
              to={PathRoute.authorization + PathRoute.authorization_permission}
              className={classNames('inline-block p-4 border-b-2', {
                'text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500':
                  indexTab == 2,
                'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300':
                  indexTab != 2
              })}
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
