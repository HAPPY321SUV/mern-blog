import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className=' min-h-screen mt-20'>
        <div className=' flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          <div className=' flex-1'>
          <Link  to="/" className='  
     font-bold dark:text-white text-4xl '>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-lg text-white '>Suv'S</span>
            Blog

        </Link>
        <p className='text-sm mt-5'>
          This is a demo project.you can sign up with your email and password
          or with Google
        </p>

          </div>
          <div className='flex-1'>
            <form className=' flex flex-col gap-4' >
              <div>
                <Label value='your username'/>
                <TextInput type='text' placeholder='usernaame' id='username'/>
              </div>
              <div>
                <Label value='your email'/>
                <TextInput type='text' placeholder='email' id='email'/>
              </div>
              <div>
                <Label value='your password'/>
                <TextInput type='text' placeholder='password' id='password'/>
              </div>
              <Button gradientDuoTone="purpleToPink"type='submit'>SignUp</Button>
                       
      
                
                

                
          

              

            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/Sign In' className='text-blue-500'>
                Sign In
                </Link>

            </div>

          </div>

        </div>
      
    </div>
  )
}

export default SignUp
