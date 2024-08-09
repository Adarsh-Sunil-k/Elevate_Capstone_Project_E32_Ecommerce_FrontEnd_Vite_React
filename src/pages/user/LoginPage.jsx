import React from 'react'
import UserSignin from '../../components/user/userSignin'
import Footer from '../../components/Footer'

const LoginPage = () => {
  return (
    
    <div className=''>
        <div className='flex justify-center  text-center py-3'><UserSignin/></div>
        <div><Footer/></div>
    </div>
  )
}

export default LoginPage