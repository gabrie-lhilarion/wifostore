import React from 'react'

const hidePriceList = (target) => {
    const card = target.parentElement.parentElement.parentElement
    console.log(card)
    card.querySelector('button').classList.toggle("hidden")
    card.querySelector('.price-list').classList.toggle('hidden')

}

const PriceList = ({ list }) => <ul className='m-2'>
    <p
        onClick={(e) => hidePriceList(e.target)}

        className='hide-list bg-slate-600 text-slate-300 text-center cursor-pointer pb-2 pt-2 rounded-tl-full rounded-tr-full hover:bg-black'>
        &#8593; hide list
    </p>

    {list.length == 0 && <p className='text-center bg-slate-300 p-4'> NO PRICE LIST AVAILABLE YET</p>}

    {list.length > 0 && list.map(item => <li
        className='flex justify-between mb-1 p-1 bg-slate-200'
        key={item.size}>
        <p className='flex justify-between bg-slate-200 w-[60%] '>

            <span className=' text-sm font-bold text-slate-600 p-2'>
                {item.size}
            </span>
            <span className=' text-sm font-bold text-slate-600 p-2'>
                &#8358;{item.price}
            </span>
        </p>
        <button
            className='bg-slate-400 p-2 rounded-full'
            type="button"
            data-product={item.product_id}
            data-item={item.item_id}
        >
            Add to cart
        </button>

    </li>)}
</ul>

const showPricelist = (target) => {
    const priceList = target.parentElement.querySelector('.price-list')
    priceList.classList.toggle("hidden")
    target.classList.add("hidden")
}

const Item = ({ product }) => <div
    className='product m-2 p-4 bg-white rounded-md'
    key={product.product_name.replace(/\s+/g, '_')}>
    <div className='product-image'>
        <img className='block m-auto' src={product.product_image_url} alt="" />
    </div>
    <h1>{product.product_name}</h1>
    <p>{product.product_detail}</p>
    <button
        onClick={(e) => showPricelist(e.target)}
        className='p-3 bg-slate-600 text-slate-200 block rounded-sm mt-2'
        type="button">Price List</button>

    <div className='price-list hidden'>
        {product.details && <PriceList list={product.details} />}
    </div>
</div>


export const OneColumn = ({ items }) => {
    return (
        <div>
            {items && items.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
        </div>
    )
}

export const TwoColumns = ({ items }) => {
    // Split items into two arrays, one for each column
    const columnOneItems = items.filter((_, index) => index % 2 === 0);
    const columnTwoItems = items.filter((_, index) => index % 2 !== 0);

    return (
        <section className="flex justify-between masonry-wrapper" id="masonry">

            <div className="column w-[50%] m-1">
                {columnOneItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>

            <div className="column w-[50%] m-1">
                {columnTwoItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>

        </section>
    );
};



export const ThreeColumns = ({ items }) => {
    // Split items into three arrays, one for each column
    const columnOneItems = items.filter((_, index) => index % 3 === 0);
    const columnTwoItems = items.filter((_, index) => index % 3 === 1);
    const columnThreeItems = items.filter((_, index) => index % 3 === 2);

    return (
        <section className="flex justify-between  masonry-wrapper" id="masonry">
            <div className="column w-[33.30%] m-1">
                {columnOneItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
            <div className="column w-[33.30%] m-1">
                {columnTwoItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
            <div className="column w-[33.30%] m-1">
                {columnThreeItems.map(item => <Item key={item.product_name.replace(/\s+/g, '_')} product={item} />)}
            </div>
        </section>
    );
};
