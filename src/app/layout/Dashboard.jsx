import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../feature/dashboard/ui/components/Navbar'
import Footer from '../../feature/dashboard/ui/components/Footer'

const Dashboard = () => {
    return (
        <div className=' '>
           
            <Outlet />
            <Footer />
        </div>
    )
}

export default Dashboard
