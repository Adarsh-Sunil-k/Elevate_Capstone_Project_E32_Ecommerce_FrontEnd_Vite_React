import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';

const userSigninSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const UserSignin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
        resolver: yupResolver(userSigninSchema),
    });

    const onSubmit = async (data) => {
      try{
          const  result = await axios.post("http://localhost:4000/api/v1/users/signin",
            data,
            {
              withCredentials: true
            }
          ) ;
          console.log(result.data);
      }catch(error){
        console.log(error.message);
        
      }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6">
          <h1 className='flex justify-center text-blue-700 text-5xl pb-3'>User Login Page</h1>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter Your Email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 justify-center text-center"
          />
          <p className="block justify-center text-center">{errors.email?.message}</p>

          <input
            {...register("password",)}
            placeholder="Enter Your Password" 
            type='password'
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
          />
          <p className="block justify-center text-center">{errors.password?.message}</p>

          <input
        type="submit"
        className="rounded-md bg-blue-500 py-1 text-white cursor-pointer"
      />
      
        </form>
      );
    }
    
    export default UserSignin;