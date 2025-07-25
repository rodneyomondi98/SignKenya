import { Link } from 'react-router-dom'
import { User, PenTool } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <PenTool className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">SignKenya</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Sign Up
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}