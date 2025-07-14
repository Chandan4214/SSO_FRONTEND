import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
 const fetchUser = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log("No token found");
      navigate('/login');
      return;
    }

    const response = await axios.get("http://localhost:3000/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // ✅ CORRECT: Check if status is NOT 200
    if (response.status !== 200) {
      navigate('/login');
    } else {
      console.log("User fetched:", response.data.user);
    }
  } catch (error) {
    console.log("Fetch user failed:", error.response?.data || error.message);
    navigate('/login');
  }
};


   useEffect(() => {
    
    fetchUser();

   },[])



  return (
    <div className='h-screen text-5xl color-blue-300'>
      Home
    </div>
  )
}

export default Home
