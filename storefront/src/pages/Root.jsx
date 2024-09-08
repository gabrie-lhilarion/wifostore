import React from 'react'
import {
    Overlay,
    User,
} from '../components'

function Root() {
    return (
        <>
            <Overlay />
            <div className='container flex h-[100vh]'>
                <aside className='w-[25%] bg-slate-100 '>
                    <div className='fixed top-0 left-0 h-[100vh] bg-slate-100 w-[25%]'>
                        <div className='flex flex-col justify-between  h-[100vh]'>
                            <div>
                                <section id='logo'>
                                    <h1 className='font-extrabold text-3xl text-center'>
                                        wifostore
                                    </h1>
                                </section>
                                <section>
                                    <div className='flex mr-4 justify-end'>
                                        <User />
                                        <p className='bg-slate-200 m-2 p-2 relative'>
                                            <span className='absolute top-[-15px] right-[-10px] text-white bg-slate-800 w-[30px] text-center rounded-full shadow-lg'>
                                                0
                                            </span>
                                            Cart
                                        </p>
                                    </div>

                                </section>
                                <section>
                                    <div className='p-4'>
                                        <input className='w-[100%] p-3 border-slate-500 border-2' type="text" name="search" placeholder='search products' id="" />
                                    </div>
                                </section>
                                <section>
                                    <ul className='p-4 text-3xl font-bold text-slate-500'>
                                        <li className='mb-4'>Root and Tuber</li>
                                        <li className='mb-4'>Fruits</li>
                                        <li className='mb-4'>Cooked food</li>
                                        <li className='mb-4'>Beverages</li>
                                        <li className='mb-4'>Condiments</li>
                                        <li className='mb-4'>Spices</li>
                                    </ul>
                                </section>



                            </div>
                            <footer className='bg-slate-700 text-slate-200  h-[100px]'>
                                footer area
                            </footer>
                        </div>

                    </div>
                </aside>

                <main className='w-[75%] verflow-y-auto	'>

                    <section className='p-4'>
                        main content area
                        Client-Side Enhancements with JavaScript
                        DOM Manipulation: Use JavaScript to dynamically update content based on user interactions. Tools like jQuery or Vanilla JS can be handy.
                        Interactive Elements: Incorporate pop-ups, modals, and intuitive animations to provide extra context without navigating away from the page.
                        Personalization: Utilize local storage to remember user preferences or display content based on past interactions. This adds a personal touch without needing a full backend setup.
                        Frameworks: Integrate a front-end framework like React or Vue.js for real-time updates and interactive UI elements without page reloads.
                        Backend Integration
                        Node.js & Express: Set up a Node.js server with Express for dynamic content generation. MongoDB can be your go-to database for handling data.
                        Django & Flask: Python lovers, integrate Django or Flask to build a RESTful API, serving data dynamically to your front end.
                        API Integration: Pull in real-time data from third-party APIs or your custom backend to keep content fresh and dynamic. Use Axios or Fetch for API calls.
                        Enhancing User Experience
                        Responsive Design: Ensure your site is flexible and responsive, adapting smoothly to any screen size or orientation.
                        Real-Time Features: Incorporate WebSockets or server-sent events to handle real-time interactions, like live chats or notifications.
                        Micro-interactions: Add subtle, engaging animations using libraries like Framer Motion or AOS (Animate on Scroll) to make your site feel lively.




                    </section>
                </main>
            </div>
        </>
    )
}

export default Root