import { Zap } from 'lucide-react'
import React from 'react'


function Sidebar() {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10'>
        {/* Logo */}
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-centershadow-lg'>
                    <Zap className='w-6 h-6 text-white '/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
