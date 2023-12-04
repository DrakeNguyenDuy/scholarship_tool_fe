import React from 'react'
// import { Outlet } from 'react-router-dom'
import SideBar from '../../components/sidebar'
// import Header from 'src/components/Header'

function MainLayout() {
  return (
    <div className='select-none'>
      <SideBar />
      {/* <Outlet /> */}
    </div>
  )
}

export default MainLayout
