import React, { useState } from 'react';


/**
 * This module defines a SignIn component that allows users to submit credentials
 * (first name, last name, email and password etc) to a backend API. It uses the `fetch()` API to send a POST request 
 * with the login data to the '/login' endpoint. If the login is successful, the response 
 * is handled accordingly, and if there's an error (either from the server or network), 
 * an error message is displayed.
 *
 * Key features:
 *  - Controlled form inputs for email and password.
 *  - Uses a button's `onClick` event to trigger the `fetch()` request.
 *  - Handles both server-side and network errors gracefully, displaying appropriate feedback.
 *
 * The `fetch()` call ensures that the form submission does not cause a full page reload 
 * or navigation, offering a smooth user experience.
 */

function SignIn({ toggle, setSiteData }) {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [house_number, setHouseNumber] = useState('');
    const [local_area, setLocalArea] = useState('');
    const [street, setStreet] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setSetConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        setLoading(true);
        const signinData = { first_name, last_name, email, state, street, house_number, local_area, phone, password, confirmPassword };


        try {
            const response = await fetch('https://wifostore.onrender.com/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signinData),
            });


            const data = await response.json();
            if (response.ok) {
                console.log(data);
                if (data.constraint) {
                    setError(`${data.constraint}`);
                }

                const { currentUser } = data
                setSiteData((siteData) => ({ ...siteData, currentUser: currentUser }))

            } else {
                // Handle server-side errors
                setError(data.message || 'Account creation failed.');
            }
        } catch (err) {
            // Handle network or other errors
            console.log(err)
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);


            setTimeout(() => setError(null), 5000)
        }
    };


    const hideOverLay = () => {
        document.getElementById('overlay').classList.add('hidden');
    };

    return (
        <section id='login' className=''>

            <div className='lg:w-[500px] p-3 w-[90%] ml-auto mr-auto mb-12 mt-3 bg-slate-500'>
                <p className='flex relative justify-end leading-[50px]'>
                    <span
                        onClick={hideOverLay}
                        className='w-[60px] border-slate-500 bg-white border-2 h-[60px] cursor-pointer 
                        block rounded-full font-extrabold  text-black text-center  text-[2em]'>
                        &times;
                    </span>
                </p>
                <h2 className='text-2xl text-center font-extrabold p-3'>
                    Create a user account
                </h2>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="first_name" placeholder="First Name" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="last_name" placeholder="Last Name" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="phone" placeholder="Phone" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setState(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="state" placeholder="State" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setLocalArea(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="local_area" placeholder="Local area" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setStreet(e.target.value)}
                        className='block p-1 w-full bg-slate-50 text-black'
                        type="text" name="street" placeholder="Street" />
                </p>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setHouseNumber(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="house_number" placeholder="House number" />
                </p>
                <p className=' mb-1'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="text" name="email" placeholder="Email" />
                </p>
                <p className=' mb-1'>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </p>
                <p>
                    <input
                        onChange={(e) => setSetConfirmPassword(e.target.value)}
                        className='block p-1 w-full bg-slate-50'
                        type="password"
                        name="comfirm_password"
                        placeholder="Confirm Password"
                    />
                </p>

                <p className='flex justify-between p-2'>
                    <span onClick={() => toggle('login')} className='text-center text-lg font-bold cursor-pointer m-2 p-3 text-black'>
                        Login instead
                    </span>
                    <button
                        onClick={(e) => handleLogin(e)}
                        className='p-1 bg-black text-white text-md rounded-xl w-[100px]'
                        type="button"
                        disabled={loading}
                    >
                        {loading ? 'Waiting ...' : 'Submit'}
                    </button>


                </p>
                {error && <span className='bg-slate-100 text-red-500 p-2'>{error}</span>}
            </div>
        </section>
    )
}

export default SignIn