import Sidebar from './components/Layout/Sidebar'
import React from 'react'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 '>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
