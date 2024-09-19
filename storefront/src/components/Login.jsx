import React, { useState } from 'react';

/**
 * This module defines a LoginForm component that allows users to submit login credentials
 * (email and password) to a backend API. It uses the `fetch()` API to send a POST request 
 * with the login data to the '/login' endpoint. If the login is successful, the response 
 * is handled accordingly, and if there's an error (either from the server or network), 
 * an error message is displayed.
 *
 * Key features:
 *  - Controlled form inputs for email and password.
 *  - Uses a button's `onClick` event to trigger the `fetch()` request.
 *  - Handles both server-side and network errors gracefully, displaying appropriate feedback.
 *
 * The `fetch()` call ensures that the login submission does not cause a full page reload 
 * or navigation, offering a smooth user experience.
 */

function Login({ toggle }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        setLoading(true);
        const loginData = { email, password };

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                // Handle success, e.g., redirect or load data
                setError(null);
            } else {
                // Handle server-side errors
                setError(data.message || 'Login failed.');
            }
        } catch (err) {
            // Handle network or other errors
            console.log(err)
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            // setError(null);
        }
    };


    const hideOverLay = () => {
        document.getElementById('overlay').classList.add('hidden');
    };

    return (
        <section id='login' className=''>

            <div className='lg:w-[500px] p-3 w-[90%] ml-auto mr-auto mb-12 mt-6 bg-slate-500'>
                <p className='flex relative justify-end leading-[50px]'>
                    <span
                        onClick={hideOverLay}
                        className='w-[60px] border-slate-500 bg-white border-2 h-[60px] cursor-pointer block rounded-full font-extrabold  text-black text-center  text-[2em]'>
                        &times;
                    </span>
                </p>
                <h2 className='text-2xl text-center font-extrabold p-6'>
                    Login to your account
                </h2>
                <p className='bg-green-600 mb-1'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='block p-2 w-full bg-slate-400'
                        type="text" name="email" placeholder="Email" />
                </p>
                <p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='block p-2 w-full bg-slate-400'
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </p>

                <p className='flex justify-end p-2'>
                    <button
                        onClick={(e) => handleLogin(e)}
                        className='p-2 bg-black text-white text-2xl'
                        type="button"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>


                </p>
                {error && <p>{error}</p>}
                <p onClick={() => toggle('signin')} className='text-center text-white m-2 p-3 bg-slate-800'>
                    Create account instead
                </p>
            </div>
        </section>
    )
}

export default Login