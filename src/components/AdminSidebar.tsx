import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export const AdminSidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname === path

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/leads', label: 'Leads', icon: '📋' },
    { path: '/admin/services', label: 'Services', icon: '🚢' },
    { path: '/admin/testimonials', label: 'Testimonials', icon: '💬' },
  ]

  return (
    <aside className="w-64 bg-navy text-white min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-heading font-bold">Admin Panel</h2>
        <p className="text-gray-300 text-sm mt-1">Qaliil Cargo</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'bg-cargo-orange text-white'
                : 'text-gray-300 hover:bg-navy/80 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-8 w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-red text-white hover:bg-opacity-90 transition-colors"
      >
        <span>🚪</span>
        <span>Logout</span>
      </button>
    </aside>
  )
}


