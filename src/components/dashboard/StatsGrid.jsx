import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react'
import React from 'react'

const stats = [
    {
        title: 'Total Revenue',
        value: '$124,563',
        change: '+12.5%',
        trend: 'up',
        icon: DollarSign,
        color: 'from-emerald-400 to-teal-600',
        bgcolor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: 'text-emerald-600 dark:text-emerald-400'
    },
    {
        title: 'Active Users',
        value: '$8,549',
        change: '+8.2%',
        trend: 'up',
        icon:  Users,
        color: 'from-blue-500 to-indigo-600',
        bgcolor: 'bg-blue-50 dark:bg-blue-900/20',
        textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
        title: 'Total Orders',
        value: '2,847',
        change: '+15.3%',
        trend: 'up',
        icon: ShoppingCart,
        color: 'from-purple-500 to-pink-600',
        bgcolor: 'bg-purple-50 dark:bg-purple-900/20',
        textColor: 'text-purple-600 dark:text-purple-400'
    },
    {
        title: 'Page Views',
        value: '45,892',
        change: '-2.1%',
        trend: 'down',
        icon: Eye,
        color: 'from-emerald-400 to-teal-600',
        bgcolor: 'bg-emerald-50 dark:bg-emerald-900/20',
        textColor: 'text-emerald-600 dark:text-emerald-400'
    }
]


function StatsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
       {stats.map((stats, index)=> {
        return (
         <div className='bg-white dark:bg-slate-900/80 backdrop-blue-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 dark:bborder-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group' key={index}> 
            <div className='flex items-start justify-between'>
                <div className='flex-1'>
                    <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2'>
                        {stats.title}
                    </p>
                    <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4 '>
                        {stats.value}
                    </p>
                    <div className='flex items-center space-x-2 '>
                        {stats.trend === 'up' ? (
                        <ArrowUpRight className='w-4 h-4 text-emerald-500' />
                        ) : (
                         <ArrowDownRight className='w-4 h-4 text-red-500'/>
                        )}
                        <span className={`text-sm font-semi-bold' ${
                            stats.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                        }`}>{stats.change}</span>
                        <span className='text-sm text-slate-500 dark:text-slate-400'>
                            vs Last month
                        </span>
                    </div>
                </div>
                <div className={'p-3 rounded-xl group-hover:scale-110 tranition-all duration-200'}>

                {/* ProgressBar */}
                <div className='mt-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                    <div className={'w-full bg-gradient-to-r rounded-full transition-all duration-100'}>
                    </div>
                </div>

                </div>
            </div>
            
            {/* 1:00 */}
            
        </div>
       )
       })}
    </div>
  )
}

export default StatsGrid