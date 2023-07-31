import {Link} from "react-router-dom";

export default function Body() {
    return (
        <div className="bg-gray-100">
            <main>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,gray,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="50%" y={-1}
                                     patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-400/20">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}/>
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
                    </svg>
                    <div
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                        aria-hidden="true">
                        <div
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#0061FF] to-[#60EFFF] opacity-20"
                            style={{
                                clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
                                ,
                            }}/>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                            <div>
                                <Link to={"/"} className="inline-flex space-x-6">
                                    <span className="sr-only">Steven Rhett Studio</span>
                                    <img
                                        className="lg:hidden flex h-48 w-auto"
                                        src="src/Ste_Rhe.svg"
                                        alt=""
                                    />
                                </Link>
                                <div className="lg:pr-4">
                                    <div className="lg:max-w-lg">
                                        <span className="font-bold leading-7 brightness-100 text-indigo-600">Full Stack
                                            Developer</span>
                                        <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight">
                                            Steven
                                            Rhett Studios
                                        </h1>
                                        <span className="mt-6 text-xl leading-8 text-gray-700">As a developer I am
                                            passionate about learning the latest software
                                            innovations.
                                            At present, I am personally invested in a project that I believe will
                                            impact many people.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-10 mb-6 text-3xl font-bold tracking-tight">
                                Recent Projects
                            </h1>
                            <span className="mt-6 text-xl leading-8">
                                I am currently working on a project called{" "}
                                <a href="https://www.felontech.org" target="_blank" rel="noopener noreferrer"
                                   className="text-indigo-600 hover:underline hover:text-indigo-500">
                                    FelonTech{" "}
                                    <span className="sr-only">felontech.org</span>
                                <span className="sr-only"> (opens in a new tab)</span>
                                    </a>
                                which is a social platform that allows students to create and connect with other returning citizens.
                                All of the students will have a desire to learn more about modern technology adn how it is integrated
                                into all aspects of life. An advanced class will teach students the basics of coding including HTML, CSS,
                                and JavaScript. The class will also teach students how to use a variety of tools such as Git, GitHub, and
                                GitHub Pages.
                            </span>
                            <span className="text-xl leading-8">
                            I am also working on a project called{" "}
                                <a href="https://www.pawsome-github-io.vercel.app" target="_blank"
                                   rel="noopener noreferrer"
                                   className="font-semiBold text-indigo-600 hover:underline hover:text-indigo-500">
                                Pawsome
                            </a>
                                <span> 🐾🐾 </span>
                            which is a social platform geared toward pet owners and pet
                                trainers.</span>
                        </div>
                        <div
                            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                     alt="App screenshot"
                                     width={2432} height={1442}
                                     className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"/>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}














