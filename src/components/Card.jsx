import React from 'react'

const Card = () => {
    return (
        <div className="my-10 flex flex-col items-center md:flex-row lg:flex-col md:justify-center md:mx-20">
            <div className="w-12 h-11 mb-6 md:mb-0 lg:mb-6 rounded-full border mx-8 border-zinc-600" >
                <div className="text-center text-indigo-950 text-xl font-semibold font-['Fraunces 144pt'] leading-10">1</div>
            </div>
            <div>
            <div className="mb-4 text-center md:text-left lg:text-center text-indigo-950 text-3xl font-semibold font-['Fraunces 144pt'] leading-9">Actionable insights</div>
            <div className="text-center md:text-left lg:text-center text-zinc-600 text-base font-normal font-['Manrope'] leading-7">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</div>
            </div>
        </div>
    )
}

export default Card
