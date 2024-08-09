import React from 'react'
import UserSignup from '../../components/user/userSignup'
import Footer from '../../components/Footer'

const SignupPage = () => {
  return (
    <div>
    <div className='flex justify-center  text-center py-3'><UserSignup/></div>
    <div><Footer/></div>
    </div>
  )
}

export default SignupPage