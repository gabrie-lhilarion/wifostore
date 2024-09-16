import React from 'react'
import { User } from "."

function UserAndCart() {
    return (
        <section className='relative'>
            <div className='flex mr-4 justify-end'>
                <User />
                <p className='bg-slate-200 m-2 p-2 relative'>
                    <span className='absolute top-[-15px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                        0
                    </span>
                    Cart
                </p>
            </div>
            <p className='obsolute bg-slate-400 z-100 max-h[350px] left-100'>
                cart content here
            </p>

        </section>
    )
}

export default UserAndCart