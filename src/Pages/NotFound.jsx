import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
      const navbar = useNavigate()
  return (
  
    <>
    <Navbar/>
    <div className='min-h-screen  flex flex-col  justify-center items-center'>
      <p className="text-7xl mb-4">
        🚫
        </p>
        <h1 className="text-7xl font-bold text-purple-700">
  404
</h1>
      <h2 className="text-3xl font-bold mt-4">
  Oops! Page Not Found
</h2>

<p className="text-gray-500 mt-2 text-center">
  The page you're looking for doesn't exist.
</p>
        <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-all duration-300 hover:scale-105" onClick={()=>navbar("/")}>
            🏠 Go Home
        </button>
    </div>
    </>
  )
}

export default NotFound