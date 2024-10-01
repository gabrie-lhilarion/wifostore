export const goToDelivery = () => {
    document.getElementById('step-1').classList.add('hidden')
    document.getElementById('step-2').classList.remove('hidden')
}

export const showOverLay = () => {
    document.getElementById('overlay').classList.remove('hidden')
}

export const goToPaymemtIntruction = () => {
    document.getElementById('step-2').classList.add('hidden')
    document.getElementById('step-3').classList.remove('hidden')
}


export const shoppingCarts = document.querySelectorAll('.shopping-cart')
shoppingCarts.forEach(cart => cart.classList.add('hidden'))

export const showSelect = (target) => {
    if (target.classList.contains('delivery_list')) {
        target.parentElement.querySelectorAll('.delivery_list').forEach(selector => selector.classList.remove('selected'))
        target.querySelector('.checkable').classList.remove("bg-slate-300")
        target.querySelector('.checkable').classList.add("bg-green-700")
        target.classList.add('selected')
    }
}

export const hideSelect = (target) => {
    if (target.classList.contains('delivery_list')) {
        target.classList.remove('selected')
        target.querySelector('.checkable').classList.remove("bg-green-700")
        target.querySelector('.checkable').classList.add("bg-slate-300")
    }
}

export const selectDeliveryTime = (target, setPayment) => {
    if (target.classList.contains('delivery_list')) {
        const amount = target.querySelector(".amount").innerHTML.replace(/,/g, '')
        const deliveryTime = target.querySelector(".delivery_time").innerHTML

        const checkoutInfo = { cart: cart, deliveryFee: amount, deliveryTime: deliveryTime }

        localStorage.setItem('checkout_info', JSON.stringify(checkoutInfo))
        goToPaymemtIntruction()

        setPayment(checkoutInfo)
    }
}