import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Footer } from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header /> 
        <SideBar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout