import React from 'react'
import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap
} from 'lucide-react'

const menuItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: 'New',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenu: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ]
  },
  {
    id: 'users',
    icon: Users,
    label: 'Users',
    submenu: [
      { id: 'all-users', label: 'All Users' },
      { id: 'roles', label: 'Roles and Permissions' },
      { id: 'activity', label: 'User Activity' },
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-Commerce',
    submenu: [
      { id: 'products', label: 'Products' },
      { id: 'orders', label: 'Orders' },
      { id: 'customers', label: 'Customers' },
    ]
  },
  {
    id: 'inventory',
    icon: Package,
    label: 'Inventory',
    count: 847,
  },
  {
    id: 'transactions',
    icon: CreditCard,
    label: 'Transactions',
  },
  {
    id: 'messages',
    icon: MessageSquare,
    label: 'Messages',
    badge: '12',
  },
  {
    id: 'calendar',
    icon: Calendar,
    label: 'Calendar',
  },
  {
    id: 'reports',
    icon: FileText,
    label: 'Reports',
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
  },
]


function Sidebar({collapsed, onToggle, currentPage, onPageChange}) {
  return (
    <div className={`${
      collapsed ? 'w-20' : 'w-72'
      } transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
        {/* Logo */}
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                  {/* <Zap className='text-white font-bold'/> */}
                   <Zap className='w-6 h-6 text-white '/>
                 </div>
                {/* Conditional Rendering */}
               {!collapsed && (
                <div>
                  <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    Admin Panel
                  </p>
                </div>
               )}
            </div>
        </div>
        
       
       {/* Navigation 1 will display Dynamic Menus */}
       <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id || item.active

            return (
              <div key={item.id}>
                <button
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }`}
                >
                  {/* Left section: Icon + Label + Badges */}
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    
                    {!collapsed && (
                      <span className="font-medium ml-2">{item.label}</span>
                    )}

                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}

                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>

                  {/* Right section: Dropdown arrow if submenu exists */}
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              </div>
            )
          })}
        </nav>


        {/* User Profile */}
        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
            <img src="/src/assets/avatar1.png" alt="user" className='w-10 h-10 rounded-full ring-2 ring-blue-500 '/>
              <div className='flex-1 min-w-0'>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-slate-800 dark:text-white truncate '>Ric Tolorio</p>
                  <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administrator</p>

                </div>

              </div>
        

          </div>

        </div>

    </div>
  )
}

export default Sidebar
