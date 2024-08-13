import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

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