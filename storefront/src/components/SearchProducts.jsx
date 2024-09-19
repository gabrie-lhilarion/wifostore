import React from 'react'

function SearchProducts() {
    return (
        <section>
            <div className='p-4'>
                <input
                    className='w-[100%] p-3 border-slate-500 border-2'
                    type="text"
                    name="search"
                    placeholder='search products'
                    id="" />
            </div>
        </section>

    )
}

export default SearchProducts