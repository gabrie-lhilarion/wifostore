import React from 'react'

function SideNavigation({ productCategories }) {
    console.log(productCategories)
    const categories = Object.keys(productCategories)
    return (
        <section>
            <ul className='p-4 text-3xl font-bold text-slate-500'>
                {categories && categories.map(
                    category => <li className='flex mb-4 text-slate-100' key={category.replace(/\s+/g, '-')}>

                        <span>
                            {category}
                        </span>


                    </li>
                )}

            </ul>
        </section>
    )
}

export default SideNavigation