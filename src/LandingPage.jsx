import React from 'react';
import CodeThinking from "./assets/coderthinking.svg"


export default function LandingPage() {
    return (
        <div className="relative bg-gray-900">
            <div
                className="relative  h-80 overflow-hidden bg-indigo-400 md:absolute md:left-0 md:h-full md:w-1/3">
                <p className="p-2 text-center font-serif text-bg-gray-900 text-3xl">Steven Rhett Studios</p>
                <img
                    className="h-full w-full  object-cover"
                    src={CodeThinking}
                    alt="drawing of a large laptop and a coder leaning against it."
                />

            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <h2 className="text-base font-semiBold leading-7 text-indigo-400">Award winning support</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white">We’re here to help</p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        I have a strong understanding of the latest technology trends and use my expertise to deliver
                        high-quality products to my clients.
                    </p>
                    <div className="mt-8">
                        <a href='/signin'
                           className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semiBold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Click here to Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

