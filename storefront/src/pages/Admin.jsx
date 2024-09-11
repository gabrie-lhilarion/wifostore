import React from 'react'
import { Link, Outlet } from "react-router-dom";

import { useFetchMultipleData } from '../utils/hooks'

function Admin() {

    // const { data, loading, error } = useFetchMultipleData([
    //     fetch('/api/users').then(res => res.json()),
    //     fetch('/api/products').then(res => res.json()),
    //     fetch('/api/orders').then(res => res.json()),
    // ]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    // const [users, products, orders] = data;


    return (
        <div className='lg:w-[800px] m-auto bg-green-200 p-4'>
            <section className='flex justify-between'>
                <h1 className='text-2xl font-extrabold text-slate-500'>
                    Dashboard/admin
                </h1>

            </section>

            <section>
                <div className='flex justify-end'>
                    <p className='p-1 text-green-800 m-1'>Hello, My Admin</p>
                    <p className='p-1 text-green-800 m-1'>login/ logout</p>
                </div>
            </section>


            <main>
                <Outlet />
            </main>



        </div>
    )
}

export default Admin