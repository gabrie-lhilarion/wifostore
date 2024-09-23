
import { PriceList } from '.'
import { showPricelist } from '../utils/cart'


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

export default Item 