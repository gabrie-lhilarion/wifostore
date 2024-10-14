import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavigation({ productCategories, products }) {

    const categories = Object.keys(productCategories)

    console.log({ products, categories })


    const productList = (category) => products.products.filter(product => product.product_category == category)

    return (
        <section>
            <ul className='p-4 text-3xl font-bold text-slate-500'>
                {categories && categories.map(
                    category => <li className='flex mb-4 text-slate-100' key={category.replace(/\s+/g, '-')}>

                        <NavLink
                            to={`categories/${category.replace(/\s+/g, '-')}`}
                            state={{ products: productList(category), name: category }}>
                            {category}
                        </NavLink>


                    </li>
                )}

            </ul>
        </section>
    )
}

export default SideNavigation