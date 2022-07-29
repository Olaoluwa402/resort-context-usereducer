import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <SideBar />
        <main>
            {Outlet}
        </main>
    </div>
  )
}

export default Layout