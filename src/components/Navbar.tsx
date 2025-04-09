import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path ? 'bg-gray-300 rounded-full' : ''

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        <div className="absolute inset-0 theme-bg-shadow rounded-full translate-x-[4px] translate-y-[4px] z-0" />

        <div className="relative theme-background backdrop-blur-md rounded-full px-6 py-2 flex gap-4 border border-gray-300 z-10">
          <Link to="/" className={`hover:underline px-4 py-2 rounded ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:underline px-4 py-2 rounded ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`hover:underline px-4 py-2 rounded ${isActive('/contact')}`}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
