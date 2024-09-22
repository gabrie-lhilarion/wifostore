import React from 'react'
import { Link } from 'react-router-dom'

function AdminHome() {
    return (
        <div>
            {/* <section className='statistic max-h-[400px] min-h-[350px]'>
                statistics
            </section> */}

            <section>
                <div className='data-objects grid lg:grid-cols-3 grid-cols-1 grid-gap-2'>
                    <div className='bg-green-600 p-4 m-1 users'>
                        <h2 className='font-extrabold text-lg'>
                            Users (2,000,100)
                        </h2>
                        <ul>
                            <li>View</li>
                        </ul>
                    </div>

                    <div className='bg-green-600 p-4 m-1 products'>
                        <h2 className='font-extrabold text-lg'>
                            Products(120)
                        </h2>
                        <ul>
                            <li>
                                <Link to='add-product'>Add a product</Link>

                            </li>
                            <li>View</li>
                        </ul>
                    </div>

                    <div className='bg-green-600 p-4 m-1 sales'>
                        <h2 className='font-extrabold text-lg'>
                            Sales(&#8356; 23,000,000.0)
                        </h2>
                        <ul>
                            <li> Month </li>
                            <li> Week </li>
                            <li> Yesterday </li>
                            <li> Today </li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AdminHome