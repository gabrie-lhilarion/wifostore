import React from 'react'
import { RiFacebookBoxLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { PiWhatsappLogoThin } from "react-icons/pi";

function Footer() {
    return (
        <footer className='bg-slate-700 text-slate-200  h-[100px]'>
            <p className='flex w-[50%] m-auto justify-between text-2xl p-3'>
                <RiFacebookBoxLine />  <LuTwitter /> <LuInstagram /> <PiWhatsappLogoThin />
            </p>
            <p className='text-center'>
                102 Oluobasanjo Way, Ikeja Lagos
            </p>

        </footer>
    )
}

export default Footer