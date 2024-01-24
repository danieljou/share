import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Reviews from './Reviews'
import Footer from './Footer'

const MainBase = () => {
    return (
        <div>
            <Header />

            <Outlet />
          
            <Footer />
        </div>
    )
}

export default MainBase