import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <Outlet/>
    </>
  )
}

export default HomeLayout