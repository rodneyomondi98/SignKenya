import { Link } from 'react-router-dom'
import { PenTool, Shield, Zap, Globe } from 'lucide-react'

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Digital Signatures for
          <span className="text-primary-600"> Kenya</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Secure, legally binding digital signatures that comply with Kenyan regulations. 
          Sign documents anywhere, anytime with complete confidence.
        </p>
        <div className="space-x-4">
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary text-lg px-8 py-3">
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose SignKenya?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              Bank-level security with full compliance to Kenyan digital signature laws
            </p>
          </div>
          <div className="text-center p-6">
            <Zap className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Sign documents in seconds, not days. Streamline your workflow today
            </p>
          </div>
          <div className="text-center p-6">
            <Globe className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Anywhere Access</h3>
            <p className="text-gray-600">
              Access your documents from anywhere with our cloud-based platform
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}