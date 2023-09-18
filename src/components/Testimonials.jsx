import React from 'react'
import profilePic from '../assets/images/profile-pic.png'
const Testimonials = () => {
    return (
        <div className="mx-4 md:left-[50%] md:-translate-x-[50%] min-h-[600px] relative">
            <div className="w-[281px] h-[281px] md:h-[453px] md:w-[453px] m-auto md:m-0 lg:ml-20 relative ">
                <div className="w-[281px] h-[281px] md:h-[453px] md:w-[453px] absolute bg-green mx-auto rounded-full" />
                <div className="w-[281px] h-[281px] md:h-[453px] md:w-[453px] bg-green absolute mx-auto rounded-full overflow-hidden" >
                <img className="w-[265px] h-[267px] md:h-[453px] md:w-[453px] top-[20px] absolute mx-auto" src={profilePic} />
                </div>
            </div>
            <div className="max-w-[100%] md:min-w-[350px] md:ml-[100px] lg:max-w-[730px] lg:ml-16 bg-purple px-8 h-[375px] flex flex-col left-[50%] -translate-x-[50%] top-[220px] md:top-[200px] lg:top-[140px] absolute">
                <div className="text-center mt-8 mb-4 text-white text-[32px] font-semibold font-['Fraunces 144pt'] leading-[48px]">Be the first to test</div>
                <div className="text-center text-white text-base font-normal font-['Manrope'] leading-7">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</div>
                <a className="inline-flex justify-center items-center mx-auto bg-green my-4 px-6 py-3 text-center text-purple text-base font-bold font-['Manrope'] leading-loose">Apply for access</a>
            </div>
        </div>
    )
}

export default Testimonials
