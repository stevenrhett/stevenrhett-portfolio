import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'


export default function ComingSoon() {
    const [count, setCount] = useState(0)


    return (

            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 ">
                    <div className="relative mx-auto max-w-xl px-4">
                        <div>
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo"/>
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo"/>
                            </a>
                        </div>
                        <div className="sm:max-w-lg">
                            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
                                Coming Soon! </h1>
                            <p className="mt-4 text-xl text-gray-500">
                            </p>
                            <div className="card">
                                <button onClick={() => alert("Why would you do that?")}
                                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                        type="button">
                                    Dont Click
                                </button>

                            </div>

                            <div>
                                <div className="mt-10">
                                    {/* Decorative image grid */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                    >
                                        <div
                                            className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                            <div className="flex items-center space-x-6 lg:space-x-8">
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div
                                                        className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        {/*<img*/}
                                                        {/*    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"*/}
                                                        {/*    alt=""*/}
                                                        {/*    className="h-full w-full object-cover object-center"*/}
                                                        {/*/>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
