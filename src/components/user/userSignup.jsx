import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



const userSignupSchema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required().min(6).max(20),
    phone:yup.string().required().min(10).max(12),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  })
  .required();

const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(userSignupSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6">
      <input
        {...register("email")}
        type="email"
        placeholder="Enter Your Email"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 justify-center text-center"
      />
      <p className="block justify-center text-center">{errors.email?.message}</p>

      <input
        {...register("firstName")}
        placeholder="Enter Your First Name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <p className="block justify-center text-center">{errors.firstName?.message}</p>

      <input
        {...register("lastName")}
        placeholder="Enter Your Last Name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <p className="block justify-center text-center">{errors.lastName?.message}</p>

      <input
        {...register("password",)}
        placeholder="Enter Your Password" 
        type='password'
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <p className="block justify-center text-center">{errors.password?.message}</p>

      <input
        {...register("confirmPassword")}
        placeholder="Confirm Password" 
        type='password'
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <p className="block justify-center text-center">{errors.confirmPassword?.message}</p>

        <input
        {...register("phone")}
        placeholder="Enter Phone Number"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 text-center"
      />
      <p className="block justify-center text-center">{errors.phone?.message}</p>
      <input
        type="submit"
        className="rounded-md bg-blue-500 py-1 text-white cursor-pointer"
      />
    </form>
  );
}

export default UserSignup;