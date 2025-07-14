import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import girlimg from '../assets/girl.png' 

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
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
      const response = await axios.post('http://localhost:3000/auth/register', user)

      if (response.status === 201) {
        toast.success('Registration successful')
        navigate('/login')
      }

      console.log(response)
    } catch (error) {
      console.log(error)
      toast.error('Signup failed')
    }
  }

  return (
    <div className="flex w-screen h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#0e1f52] text-white px-[10rem] flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-10">Welcome to Dance HUb</h1>
        <h2 className="text-2xl mb-6">Create an account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-black outline-none"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-black outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-2 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm">Register With</p>
        <div className="flex justify-between mt-3 space-x-2">
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">Google</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">LinkedIn</button>
          <button className="bg-gray-200 text-black px-4 py-1 rounded-md font-semibold">SSO</button>
        </div>

        <p className="mt-6 text-sm text-center">
          Already have an account?
          <Link to="/login" className="ml-1 text-white underline">
            Login
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

export default Signup
