import Layout from '@/components/Layout'
import Button from '@/components/utilities/Button'
import TextField from '@/components/utilities/TextField'
import { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function Auth() {
  const [_, setCookies] = useCookies(['token'])
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        isSignUp
          ? `${import.meta.env.VITE_API_URL}/signup`
          : `${import.meta.env.VITE_API_URL}/auth/login`,
        { name, email, password, password_confirmation: confirmPassword }
      )

      setCookies('token', res.data.auth_token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className='grid place-items-center mt-10'>
        <div className='space-y-3'>
          <h1 className='text-lg font-bold'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
          {isSignUp && (
            <TextField
              label='Name'
              placeholder='Type your Full Name'
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <TextField
            label='Email'
            placeholder='Type your Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='Password'
            placeholder='Type your Password'
            onChange={(e) => setPassword(e.target.value)}
            secure
          />
          {isSignUp && (
            <TextField
              label='Confirm Password'
              placeholder='Type your Password Again'
              onChange={(e) => setConfirmPassword(e.target.value)}
              secure
            />
          )}
          <Button onClick={submitHandler}>Submit</Button>
          {isSignUp ? (
            <div className='text-xs'>
              Already have an account?{' '}
              <a
                className='font-bold cursor-pointer'
                onClick={() => setIsSignUp(false)}
              >
                sign in
              </a>
            </div>
          ) : (
            <div className='text-xs'>
              Don't have an account?{' '}
              <a
                className='font-bold cursor-pointer'
                onClick={() => setIsSignUp(true)}
              >
                sign up
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Auth
