import React from 'react'
import StatsGrid  from './StatsGrid'
import ChartSection  from './ChartSection'
import TableSection from './TableSection'

function Dashboard() {
  return (
    <div className='space-y-6 h-screen  p-4'>
        {/* Stats Grid */}
        <StatsGrid />
        
        {/* Chart Section */}
        <ChartSection />

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
          <div className='xl:col-span-2'>
            <TableSection />
          </div>
        </div>

         {/* (Optional) Add another card here, e.g., Top Products */}
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Top Products</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Coming soon…</p>
        </div>
         
    </div>
  )
}

export default Dashboard