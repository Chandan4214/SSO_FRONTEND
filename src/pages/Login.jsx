import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import girlimg from '../assets/girl.png' 

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', user)

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token)
        toast.success('Login successful')
        navigate('/')
      }

      console.log(response)
    } catch (error) {
      console.log(error)
      toast.error('Login failed')
    }
  }

  return (
    <div className="flex w-screen h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#0e1f52] text-white px-[10rem] flex flex-col  justify-center">
        <h1 className="text-3xl font-semibold mb-10">Welcome Back</h1>
        <h2 className="text-2xl mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-black outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-black outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-2 rounded-md font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm">Access Quickly</p>
        <div className="flex justify-between mt-3 space-x-2">
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">Google</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">LinkedIn</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">SSO</button>
        </div>

        <p className="mt-6 text-sm text-center">
          Don't have an account?
          <Link to="/signup" className="ml-1 text-white underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Panel */}
      <div
        className="w-1/2 h-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${girlimg})` }}
      >
        <div className="absolute inset-0 bg-[#0e1f52] opacity-70"></div>
      </div>
    </div>
  )
}

export default Login
