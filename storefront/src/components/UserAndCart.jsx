import React from 'react'
import { User } from "."

function UserAndCart() {
    return (
        <section>
            <div className='flex mr-4 justify-end'>
                <User />
                <p className='bg-slate-200 m-2 p-2 relative'>
                    <span className='absolute top-[-15px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                        0
                    </span>
                    Cart
                </p>
            </div>

        </section>
    )
}

export default UserAndCart