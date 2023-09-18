import React from 'react'
import logo from '../assets/images/workit.svg'
import iphone from '../assets/images/iphone.png'

const Header = () => {
    return (
        <div className='pt-8 mb-20 max-h-120 lg:max-h-[550px] px-4 bg-purple'>
            <nav className='flex justify-between'>
                <img src={logo} alt="logo" />
                <div className='flex flex-col justify-center align-center'>
                    <a href='#' className='text-white'>Apply for access</a>
                    <div className='w-full bg-green h-1 mt-1'></div>
                </div>
            </nav>
            <div className="my-6 relative flex flex-col items-center justify-center">
                <div className="text-center my-10 text-white text-5xl md:text-6xl lg:text-7xl md:mx-24 lg:max-w-[635px] lg:mx-auto font-semibold font-['Fraunces 144pt'] leading-10">
                    Data&nbsp;
                    <div className='inline-flex flex-col items-center justify-center'>
                        tailored
                        <div className='w-full bg-green h-0.5 mt-1'></div>
                    </div> to your needs.
                </div>
                <a href="#" className="py-3 px-6 text-purple text-base font-bold font-['Manrope'] leading-loose bg-green">Learn more</a>
                <img src={iphone} className="my-16 lg:my-24" alt="" />
            </div>
        </div>
    )
}

export default Header
