import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { StickyMobileHeader } from '../components';
import {
    minusQuantity,
    getQuantity,
    plusQuantity,
    deleteFromCart
} from '../utils/cart';

function Checkout() {
    const [siteData, setSiteData] = useOutletContext();
    const [payment, setPayment] = useState({});
    const { cart } = siteData;

    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || {};

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    // Optional: Hide shopping carts if needed (depends on your app logic)
    // If 'shopping-cart' elements are part of this component, consider managing their visibility via state or props.

    const goToDelivery = () => setCurrentStep(2);

    const goToPaymentInstruction = () => setCurrentStep(3);

    const showOverlay = () => setIsOverlayVisible(true);

    const hideOverlay = () => setIsOverlayVisible(false);

    const selectDeliveryTime = (deliveryOption) => {
        const { amount, deliveryTime } = deliveryOption;

        const checkoutInfo = { cart, deliveryFee: amount, deliveryTime };

        localStorage.setItem('checkout_info', JSON.stringify(checkoutInfo));
        setPayment(checkoutInfo);
        setCurrentStep(3);
    };

    // Sample delivery options
    const deliveryOptions = [
        { id: 1, deliveryTime: 'Within 24 hrs', amount: '5,500' },
        { id: 2, deliveryTime: 'Within 2 days', amount: '2,500' },
        { id: 3, deliveryTime: 'Within 1 week', amount: '1,500' },
        { id: 4, deliveryTime: 'Within 1 month', amount: '500' },
    ];

    return (
        <>
            <StickyMobileHeader cart={cart} siteData={siteData} setSiteData={setSiteData} />
            <section className='lg:mt-6 mt-24'>
                <div className='flex justify-between m-6'>
                    <p className='p-4'>
                        SHOP &#187; CHECKOUT
                    </p>
                    <Link to='/' className='mr-10 bg-slate-500 text-slate-100 p-4'>
                        Continue shopping &#187;
                    </Link>
                </div>
                <div className='lg:flex justify-between lg:w-[85%] m-auto mb-[100px]'>
                    <div className='lg:w-[59%] cart-details rounded-md bg-slate-200'>
                        <div className='accordion divide-y divide-slate-400'>
                            {/* Step 1: Cart Details */}
                            <div className='accordion-item'>
                                <h1 className='accordion-header p-3 bg-slate-200'>
                                    <span className='bg-slate-500 text-slate-100 text-sm p-2 m-2 rounded-full'>
                                        Step 1
                                    </span>  Cart Details
                                </h1>
                                {currentStep === 1 && (
                                    <article className='accordion-content bg-slate-100 divide-y divide-slate-300'>
                                        {cart.length === 0 ? (
                                            <div className='grid place-items-center h-[150px]'>
                                                <p>The shopping cart is empty!</p>
                                            </div>
                                        ) : (
                                            cart.map((item) => (
                                                <div key={item.item_id} className='flex justify-between pt-2'>
                                                    <div className='flex'>
                                                        <div className='w-[100px] p-2 m-2'>
                                                            <img src={item.product_image_url} alt={item.product_name} className='w-full h-auto' />
                                                        </div>
                                                        <div className='text-2xl'>
                                                            <strong>{item.product_name}</strong> <br />
                                                            {item.size} <br />
                                                            &#8358;{item.price}
                                                        </div>
                                                    </div>

                                                    <div className='grid place-items-center'>
                                                        <div className='text-center text-slate-500'>
                                                            <span className='text-sm'> Quantity </span>
                                                            <div className='bg-slate-200 flex items-center justify-center'>
                                                                <span
                                                                    onClick={() => minusQuantity(item.item_id, cart, setSiteData)}
                                                                    className='hover:bg-slate-600 cursor-pointer hover:text-slate-200 p-1 w-[60px] h-[60px] flex items-center justify-center'
                                                                >
                                                                    &minus;
                                                                </span>
                                                                <input
                                                                    className='w-[30px] h-[30px] text-center'
                                                                    type="text"
                                                                    value={getQuantity(item.item_id, cart)}
                                                                    readOnly
                                                                />
                                                                <span
                                                                    onClick={() => plusQuantity(item.item_id, cart, setSiteData)}
                                                                    className='hover:bg-slate-600 cursor-pointer hover:text-slate-200 p-1 w-[60px] h-[60px] flex items-center justify-center'
                                                                >
                                                                    &#x2B;
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='font-extrabold grid place-items-center p-4'>
                                                        <span
                                                            className='w-[30px] h-[30px] hover:bg-slate-500 text-lg text-center cursor-pointer leading-0 hover:text-slate-100 rounded-full flex items-center justify-center'
                                                            onClick={() => deleteFromCart(item.item_id, cart, setSiteData)}
                                                        >
                                                            &times;
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        )}

                                        {cart.length > 0 && (
                                            <div className='pr-10 flex justify-end'>
                                                <button
                                                    onClick={goToDelivery}
                                                    className='bg-slate-500 text-slate-100 text-sm cursor-pointer rounded-sm p-2 m-2'
                                                >
                                                    Continue to Delivery
                                                </button>
                                            </div>
                                        )}
                                    </article>
                                )}
                            </div>

                            {/* Step 2: Delivery Details */}
                            <div className='accordion-item'>
                                <h1 className='accordion-header p-3 bg-slate-200'>
                                    <span className='bg-slate-500 text-slate-100 text-sm p-2 m-2 rounded-full'>
                                        Step 2
                                    </span>  Delivery Details
                                </h1>
                                {currentStep === 2 && (
                                    <div className='accordion-content bg-slate-100 p-4'>
                                        {/* Tabs */}
                                        <ul className='flex tabs relative h-[48px] mb-4'>
                                            <li
                                                className={`p-2 m-2 mb-0 bordered cursor-pointer ${!currentUser.first_name ? 'bg-slate-100' : 'bg-slate-100'}`}
                                                onClick={() => setCurrentStep(2)}
                                            >
                                                Guest
                                            </li>
                                            <li
                                                className={`p-2 m-2 mb-0 bordered cursor-pointer ${currentUser.first_name ? 'bg-slate-50' : 'bg-slate-100'}`}
                                                onClick={() => setCurrentStep(2)}
                                            >
                                                Customer
                                            </li>
                                        </ul>

                                        {/* Tabs Content */}
                                        <div className='tabs-content border-t-2 border-slate-400'>
                                            {!currentUser.first_name ? (
                                                <div id='guest' className='h-[200px] grid place-items-center'>
                                                    <p className='bg-white p-3 leading-5'>
                                                        <button
                                                            onClick={showOverlay}
                                                            className='p-2 m-3 inline-block bg-slate-600 rounded-sm text-slate-100'
                                                            type="button"
                                                        >
                                                            Login or create account
                                                        </button>
                                                        <br />
                                                        We are sorry that you cannot complete your purchase as a guest.
                                                        Our engineers are working to implement this feature as soon as possible.
                                                        <br />
                                                        Thank you!
                                                    </p>
                                                </div>
                                            ) : (
                                                <div id='customer' className='min-h-[200px] grid place-items-center'>
                                                    <div className='bg-white p-6 leading-5'>
                                                        <p className='bg-red-100 p-3'>
                                                            To be delivered to <strong>{currentUser.first_name} {currentUser.last_name}.</strong>
                                                            <br />
                                                            We will use your address from our records.
                                                        </p>

                                                        <ul className='list-decimal divide-y divide-slate-400 mt-4'>
                                                            {deliveryOptions.map((option) => (
                                                                <li
                                                                    key={option.id}
                                                                    className={`flex justify-between p-2 cursor-pointer ${selectedDelivery && selectedDelivery.id === option.id ? 'selected bg-green-700 text-white' : ''
                                                                        }`}
                                                                    onClick={() => selectDeliveryTime(option)}
                                                                    onMouseEnter={() => setSelectedDelivery(option)}
                                                                    onMouseLeave={() => setSelectedDelivery(null)}
                                                                >
                                                                    <span className='delivery_time'>{option.deliveryTime}</span>
                                                                    <span>
                                                                        &#8358;<em className='amount'>{option.amount}</em>
                                                                        <em className={`checkable inline-block ml-2 text-center w-[40px] text-sm font-extrabold p-1 rounded-sm ${selectedDelivery && selectedDelivery.id === option.id ? 'bg-green-700' : 'bg-slate-300'}`}>
                                                                            &#10003;
                                                                        </em>
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <div className='flex justify-between mt-4'>
                                                            <button className='p-3 bg-slate-600 text-slate-100' type="button">
                                                                Give new address
                                                            </button>
                                                            <button
                                                                onClick={goToPaymentInstruction}
                                                                className='p-3 ml-20 bg-red-100 text-slate-800'
                                                                type="button"
                                                            >
                                                                Continue to payment instruction
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Step 3: Payment Instructions */}
                            <div className='accordion-item'>
                                <h1 className='accordion-header p-3 bg-slate-200'>
                                    <span className='bg-slate-500 text-slate-100 text-sm p-2 m-2 rounded-full'>
                                        Step 3
                                    </span>  Payment instructions
                                </h1>
                                {currentStep === 3 && (
                                    <div className='accordion-content bg-slate-100 p-4'>
                                        <div id='payment-instruction' className='min-h-[150px] grid place-items-center'>
                                            <div className='bg-white p-3 leading-5'>
                                                <h2 className='text-2xl text-center p-3'>Be mindful of the following instructions</h2>
                                                <ul className='text-sm list-decimal p-4'>
                                                    <li>
                                                        Make sure the card is your card; we will check if the card holder's name matches your name.
                                                    </li>
                                                    <li>
                                                        During the payment process, please don't close the window.
                                                    </li>
                                                    <li>
                                                        Your payment will be processed instantly.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className='lg:w-[39%]'>
                        <h1 className='text-2xl text-center bg-slate-400 rounded-tr-md rounded-tl-md p-4'>
                            Make Payment
                        </h1>
                        {Object.keys(payment).length === 0 ? (
                            <div className='bg-red-100 payment-processor grid place-items-center h-[200px]'>
                                <p className='rounded-md p-4 font-extrabold'>...Waiting for payment details</p>
                            </div>
                        ) : (
                            <div className='payment-processor p-3 bg-white rounded-md'>
                                <table className='w-full divide-y divide-slate-400'>
                                    <thead>
                                        <tr className='font-bold'>
                                            <th className='p-2 text-left'>Item</th>
                                            <th className='p-2 text-left'>Quantity</th>
                                            <th className='p-2 text-left'>Price</th>
                                            <th className='p-2 text-left'>Item Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payment.cart.map(item => (
                                            <tr key={item.item_id} className='p-2'>
                                                <td className='p-2'>{item.size} {item.product_name}</td>
                                                <td className='p-2'>{item.quantity}</td>
                                                <td className='p-2'>&#8358;{item.price}</td>
                                                <td className='p-2'>&#8358;{(+item.quantity * +item.price).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                                <span style={{ float: 'left' }}> Sub total </span>
                                                &#8358; {payment.cart.reduce((total, item) => total + (+item.quantity * +item.price), 0).toLocaleString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                                <span style={{ float: 'left' }}> Delivery </span>
                                                &#8358; {Number(payment.deliveryFee).toLocaleString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-right font-bold bg-green-100 p-2' colSpan={4}>
                                                <span style={{ float: 'left' }}> Grand Total </span>
                                                &#8358; {(+payment.deliveryFee + payment.cart.reduce((total, item) => total + (+item.quantity * +item.price), 0)).toLocaleString()}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Overlay Modal (if needed) */}
            {isOverlayVisible && (
                <div id='overlay' className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-md'>
                        {/* Overlay Content */}
                        <h2 className='text-xl mb-4'>Login or Create Account</h2>
                        {/* Add your login/create account form here */}
                        <button onClick={hideOverlay} className='mt-4 bg-red-500 text-white px-4 py-2 rounded'>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Checkout;
