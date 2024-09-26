import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://personalgrowth.com/wp-content/uploads/pg-books1.jpg.webp"
        alt="Books"
      />

      {/* Notes Button */}
      <Link
        to="/notes"
        className="absolute top-4 right-4 px-6 py-2 bg-red-900 text-white font-semibold border border-red-200 rounded shadow-md hover:bg-red-800"
        
      >
        Notes
      </Link>
    </div>
  )
}

export default Home
