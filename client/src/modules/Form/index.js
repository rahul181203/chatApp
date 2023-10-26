import {React,useState} from 'react'
import Input from '../../components/input'
import Button from '../../components/button'

const Form = (
  {
    isSignInPage = false,
  }
) => {
  const [data,setData] = useState({
    ...(!isSignInPage && {
      name: "",
    }),
    email: "",
    password: "",
  });

  // console.log("data :>>", data);

  return (
    <div className='bg-white shadow-lg h-[600px] w-[600px] rounded-lg flex flex-col justify-center items-center'>
      <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
      <div className='text-xl font-light mb-10'>{isSignInPage ? 'Sign in to get explored' : 'Sign up now to get started'}</div>
      <form className='flex flex-col items-center justify-center w-[100%]' action='/submit' onSubmit={console.log('submitted')}>
      {!isSignInPage && <Input label='Full Name' name='name' placeholder='Enter your full name' className='mb-6' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />}
      <Input label='Email address' name='email' placeholder='Enter your email' type='email' className='mb-6' value={data.email} onChange={(e)=>setData({...data, email: e.target.value})} />
      <Input label='Password' name='password' type='password' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e)=>setData({...data, password: e.target.value})} />
      <Button label={isSignInPage?'Sign In':'Sign up'} type='submit' className='w-1/2 mb-2'/>
      </form>
      <div className='text-center'>{isSignInPage? "Didn't have an account? ":'Already have an account?'} <span className='text-blue-500 cursor-pointer hover:text-blue-600'>{isSignInPage?'Sign Up':'Sign in'}</span></div>
    </div>
  )
}

export default Form;