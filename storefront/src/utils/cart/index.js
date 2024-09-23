
export const showPricelist = (target) => {
    const priceList = target.parentElement.querySelector('.price-list')
    priceList.classList.toggle("hidden")
    target.classList.add("hidden")
}

export const alreadyInCart = (item_id, cart) => {
    return cart.find(item => Number(item.item_id) === Number(item_id))
}

export const addToCart = (itemId, items, cart, products, setSiteData) => {
    const item = items.find(item => Number(item.item_id) === Number(itemId))
    const product = products.products.find(product => Number(product.product_id) === Number(item.product_id))
    const updatedItem = { ...item, quantity: 1, product_image_url: product.product_image_url, product_name: product.product_name }

    const updatedCart = cart.concat(updatedItem)
    localStorage.setItem('wifostore_cart', JSON.stringify(updatedCart))

    setSiteData((siteData) => ({ ...siteData, cart: updatedCart }))
}

export const getQuantity = (itemId, cart) => {

    const item = cart.find(item => Number(item.item_id) === Number(itemId))
    return item.quantity
}

export const minusQuantity = (itemId, cart, setSiteData) => {
    const item = cart.find(item => Number(item.item_id) === Number(itemId))

    if (item.quantity > 1) {
        item.quantity--

        localStorage.setItem('wifostore_cart', JSON.stringify(cart))

        setSiteData((siteData) => ({ ...siteData, cart: cart }))
    } else {
        const id = item.item_id
        const cartAfterDelete = cart.filter(item => Number(item.item_id) !== Number(id))

        localStorage.setItem('wifostore_cart', JSON.stringify(cartAfterDelete))

        setSiteData((siteData) => ({ ...siteData, cart: cartAfterDelete }))
    }
}
export const plusQuantity = (itemId, cart, setSiteData) => {
    const item = cart.find(item => Number(item.item_id) === Number(itemId))
    item.quantity++

    localStorage.setItem('wifostore_cart', JSON.stringify(cart))

    setSiteData((siteData) => ({ ...siteData, cart: cart }))
}

export const deleteFromCart = (id, cart, setSiteData) => {

    const cartAfterDelete = cart.filter(item => Number(item.item_id) !== Number(id))

    localStorage.setItem('wifostore_cart', JSON.stringify(cartAfterDelete))

    setSiteData((siteData) => ({ ...siteData, cart: cartAfterDelete }))
}

export const hidePriceList = (target) => {
    const card = target.parentElement.parentElement.parentElement
    card.querySelector('button').classList.toggle("hidden")
    card.querySelector('.price-list').classList.toggle('hidden')

}