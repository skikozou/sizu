import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path ? 'theme-active rounded-full' : ''

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        <div className="absolute inset-0 theme-bg-shadow rounded-full translate-x-[4px] translate-y-[4px] z-0" />

        <div className="relative theme-background backdrop-blur-md rounded-full px-6 py-2 flex gap-4 border border-gray-300 z-10">
          <Link to="/" className={`hover:underline hover:text-[#FF9763] px-4 py-2 rounded theme-text ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:underline hover:text-[#FF9763] px-4 py-2 rounded theme-text ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`hover:underline hover:text-[#FF9763] px-4 py-2 rounded theme-text ${isActive('/contact')}`}>
            Contact
          </Link>
          <Link to="/link" className={`hover:underline hover:text-[#FF9763] px-4 py-2 rounded theme-text ${isActive('/link')}`}>
            Link
          </Link>
        </div>
      </div>
    </div>
  )
}
