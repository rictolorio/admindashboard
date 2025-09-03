import React from 'react'
import {MoreHorizontal, TrendingUp} from 'lucide-react'

const recentOrders = [
    {
        id: '#3847',
        customer: 'John Smith',
        product: 'MacBook Pro 16',
        amount: '$2,399',
        status: 'completed',
        date: '2024-01-15',
    },
    {
        id: '#3848',
        customer: 'Sara Johnson',
        product: 'Iphone 15 Pro',
        amount: '$1,199',
        status: 'pending',
        date: '2024-01-15',
    },
    {
        id: '#3849',
        customer: 'Mike Wilson',
        product: 'Airpods Pro',
        amount: '$1,199',
        status: 'pending',
        date: '2024-01-15',
    },
    {
        id: '#3850',
        customer: 'Emily Davis',
        product: 'Ipad Air',
        amount: '$599',
        status: 'cancelled',
        date: '2024-01-14',
    },
]

const topProducts = [
    {
        name: 'MackBook Pro 16',
        sales: 1247,
        revenue: '$2,987,538',
        trend: 'up',
        change: '+12%',
    },
    {
        name: 'IPhone 15 Pro',
        sales: 2156,
        revenue: '$2,587,044',
        trend: 'up',
        change: '+8%',
    },
    {
        name: 'Airpods Pro',
        sales: 3421,
        revenue: '$852,299',
        trend: 'down',
        change: '-3%',
    },
    {
        name: 'IPad Air',
        sales: 987,
        revenue: '$591,213',
        trend: 'up',
        change: '+15%',
    },

]

function TableSection() { 
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
            
            case 'pending':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
            
            case 'cancelled':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            default:
                return 'bg-slate=100 text-slate-700 dark:bg-slate-800 dark-text-sate-400'
        }
    }
    return ( <div className='space-y-6'> 
    {/* Recent Order */} 
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50  dark:border-slate-700/50 overflow-hidden'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent orders</h3>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>Latest customer order</p>
                    </div> 
                        
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium '> 
                        View All 
                    </button> 
                </div> 
            </div>
        
        
        {/* table */}
        <div className='overflow-x-auto '>
            <table className='w-full'>
                <thead> 
                    <tr>
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Order ID</th>
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Customer</th>
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Product</th>
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Amount</th> 
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Status</th>
                        <th className='text-left p-4 text-2xl font-semibold text-slate-600 dark:text-slate-100'>Date</th>
                    </tr>
                </thead>
                    
                <tbody>
                {recentOrders.map((order, index) => {
                    return (
                    <tr
                        key={order.id || index}   // ✅ must have key
                    >
                        <td className="p-4">
                        <span className="text-sm font-medium text-blue-500">{order.id}</span>
                        </td>

                        <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">{order.customer}</span>
                        </td>

                        <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">{order.product}</span>
                        </td>

                        <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">{order.amount}</span>
                        </td>

                        <td className="p-4">
                        <span
                            className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                            order.status
                            )}`}
                        >
                            {order.status}
                        </span>
                        </td>

                        <td className="p-4">
                        <span className="text-sm text-slate-800 dark:text-white">
                            <MoreHorizontal className="w-4 h-4" />
                        </span>
                        </td>
                    </tr>
                    )
                })}
                </tbody>                 
            </table>
        </div>   
    </div> 
    {/* Top Products */}
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2x border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center justify-between'>
                <div className='text-lg font-bold text-slate-800 dark:text-white  '>
                    <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
                </div>
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Best performing products
                </p>                
            </div>
            <button className='text=blue-600 hover:text-blue-700 text-sm font-medium dark:text-slate-100/50 dark:hover:text-slate-600/50'>
             View all   
            </button>           
        </div>

        {/* Dynamic data */}
        <div className='p-6 space-y-4'>
            {topProducts.map((product, index)=> {
                return (
                    <div className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transitions-colors'>
                <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                        {product.name}
                    </h4>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>{product.sales}</p>
                </div>
                <div className='text-right'>
                    <p className='text-sm font-semigold text-slate-800 dark:text-white'>{product.revenue}</p>
                    <div className='flex items-center space-x-1'>
                        <TrendingUp className = 'w-3 h-3 text-emerald-500 dark:text-slate-50' />
                        <span className={`text-xs font-medium ${product.trend === 'up' ? 'text-emerald-500' : 'text-red-500'} `}>{product.change}</span>

                    </div>
                </div>

            </div>
             )})}
        </div>

    </div>
</div> 
)}

// 1:36:16

export default TableSection