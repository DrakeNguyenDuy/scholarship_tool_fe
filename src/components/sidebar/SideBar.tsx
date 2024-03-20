/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Outlet } from 'react-router-dom'
import ItemSideBar from './ItemSideBar'
import { PathRoute } from '../../constants/PathRoute'
import { SvgConstants } from '../../constants/SvgConstants'

export default function SideBar() {
  return (
    <div>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end'>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  />
                </svg>
              </button>
              <a href='https://flowbite.com' className='flex ms-2 md:me-24'>
                <img src='https://flowbite.com/docs/images/logo.svg' className='h-8 me-3' alt='FlowBite Logo' />
                <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                  Schotool
                </span>
              </a>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                    aria-expanded='false'
                    data-dropdown-toggle='dropdown-user'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='w-8 h-8 rounded-full'
                      src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      alt='user photo'
                    />
                  </button>
                </div>
                <div
                  className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                  id='dropdown-user'
                >
                  <div className='px-4 py-3' role='none'>
                    <p className='text-sm text-gray-900 dark:text-white' role='none'>
                      Neil Sims
                    </p>
                    <p className='text-sm font-medium text-gray-900 truncate dark:text-gray-300' role='none'>
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    {/* <ItemSideBar name={"Dashboard"} to="/login"/>
                    <ItemSideBar name={"Người dùng"} to="/login"/>
                    <ItemSideBar name={"Ear"} to="/login"/>
                    <ItemSideBar name={"Thiết lập"} to="/login"/> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <ItemSideBar to={PathRoute.dashboard} name='Trung tâm' svg={SvgConstants.dashboard} />
            <ItemSideBar to={PathRoute.user} name='Người dùng' svg={SvgConstants.user} />
            <ItemSideBar to={PathRoute.histories} name='Lịch sử' svg={SvgConstants.histories} />
            <ItemSideBar to={PathRoute.university} name='Trường đại học' svg={SvgConstants.university} />
            <ItemSideBar to={PathRoute.event} name='Sự kiện' svg={SvgConstants.event} />
            <ItemSideBar to={PathRoute.authorization} name='Phân quyền' svg={SvgConstants.authorization} />
            <ItemSideBar to={PathRoute.setting} name='Thiết lập' svg={SvgConstants.setting} />
          </ul>
          <ul className='pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700'>
            <ItemSideBar to={PathRoute.profile} name='Hồ sơ' svg={SvgConstants.profile} />
          </ul>
          <p className='tracking-tighter text-gray-500 md:text-sm dark:text-gray-400'>
            @ 2024 - A product of <a href='https://www.matohela.com/'>metohela.com</a>
          </p>
        </div>
      </aside>
      <div className='p-4 sm:ml-64'>
        <div className='p-4 border-gray-200 dark:border-gray-700 mt-14'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
