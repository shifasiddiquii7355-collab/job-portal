import React, { useState } from "react";
import {Link,NavLink} from "react-router-dom"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <>
   <div className="sticky top-0 z-50 flex justify-between items-center h-20 px-6 lg:px-10 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100 relative">
    <h1 className="text-3xl font-extrabold">
  <Link to="/">
    <span className="text-gray-900">Job</span>{" "}
    <span className="text-purple-700">Portal</span>
  </Link>
</h1>
<ul className="hidden md:flex gap-10 cursor-pointer">
        <li className='hover:text-purple-800 hover:scale-110 transition-transform duration-300 hover:font-bold'>
            <NavLink className={({ isActive }) =>
  `relative transition-all duration-300 ${
    isActive
      ? "text-purple-700 font-bold"
      : "text-gray-700 hover:text-purple-700"
  }`
} to="/">Home</NavLink>
        </li>
        <li className='hover:text-purple-800 hover:scale-110 transition-transform duration-300 hover:font-bold'>
           <NavLink className={({ isActive }) =>
  `relative transition-all duration-300 ${
    isActive
      ? "text-purple-700 font-bold"
      : "text-gray-700 hover:text-purple-700"
  }`
} to="/jobs"> Jobs</NavLink>
        </li>
        <li className='hover:text-purple-800 hover:scale-110 transition-transform duration-300 hover:font-bold'>
           <NavLink className={({ isActive }) =>
  `relative transition-all duration-300 ${
    isActive
      ? "text-purple-700 font-bold"
      : "text-gray-700 hover:text-purple-700"
  }`
} to="/saved-jobs"> Saved</NavLink>
        </li>
    </ul>
  <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-3xl text-purple-700"
>
  {isOpen ? "✕" : "☰"}
</button>
    <button className="hidden md:block bg-purple-700 px-4 py-1.5 text-white rounded-md transition-all duration-300 hover:bg-purple-800 hover:scale-105">Login</button>
   </div>
   {isOpen && (
  <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
    <ul className="flex flex-col items-center py-4 gap-4">
      <li>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/jobs" onClick={() => setIsOpen(false)}>
          Jobs
        </NavLink>
      </li>

      <li>
        <NavLink to="/saved-jobs" onClick={() => setIsOpen(false)}>
          Saved
        </NavLink>
      </li>

     <button
  onClick={() => setIsOpen(false)}
  className="bg-purple-700 text-white px-4 py-2 rounded-md"
>
  Login
</button>
    </ul>
  </div>
)}
   </>
  )
}

export default Navbar