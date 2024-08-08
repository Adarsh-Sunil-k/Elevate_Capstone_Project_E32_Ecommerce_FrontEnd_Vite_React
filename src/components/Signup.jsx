import { useForm } from "react-hook-form"


const Signup =()=> {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (

    <form onSubmit={handleSubmit(onSubmit)} className= "flex flex-col gap-y-2 rounded-md border p-6">
        <input {...register("email", { pattern: /^[A-Za-z]+$/i },{require:true})} type="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"/>
        <input {...register("firstName", { required: true, maxLength: 20 })} className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"/>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i },{require:true})} className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"/>
        <input type="text"  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"/>
        <input type="submit" className= "rounded-md bg-blue-500 py-1 text-white"/>
    </form>


  )
}

export default Signup;