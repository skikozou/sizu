import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Link from './pages/Link'

export default function Router() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/link', element: <Link /> },
  ])

  return routes
}
