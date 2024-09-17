import React from 'react'
import { useFetcher } from 'react-router-dom'
function Overlay() {

    const fetcher = useFetcher()
    const hideOverLay = () => {
        document.getElementById('overlay').classList.add('hidden')
    }

    return (
        <div id='overlay' className={`hidden flex flex-col top-0 left-0 fixed w-[100vw] h-[100vh] bg-slate-800 z-[100] bg-opacity-50`}>

            <div>
                <section id='login' className=''>

                    <fetcher.Form className='lg:w-[500px] p-3 w-[90%] ml-auto mr-auto mb-12 mt-6 bg-slate-500' action="/login">
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
                            <input className='block p-2 w-full bg-slate-400' type="text" name="email" />
                        </p>
                        <p>
                            <input className='block p-2 w-full bg-slate-400' type="password" name="email" />
                        </p>

                        <p className='flex justify-end p-2'>
                            <button className='p-2 bg-black text-white text-2xl' type="submit">Login</button>
                        </p>
                    </fetcher.Form>
                </section>

                {/* <section id='create-account' className=''>

                    <fetcher.Form className='lg:w-[500px] p-3 w-[90%] ml-auto mr-auto mb-12 mt-6 bg-slate-500' action="/create-user">
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
                            <input className='block p-2 w-full bg-slate-400' type="text" name="email" />
                        </p>
                        <p>
                            <input className='block p-2 w-full bg-slate-400' type="password" name="email" />
                        </p>

                        <p className='flex justify-end p-2'>
                            <button className='p-2 bg-black text-white text-2xl' type="submit">Login</button>
                        </p>
                    </fetcher.Form>
                </section> */}
            </div>
        </div>
    )
}

export default Overlay