import {Link} from "react-router-dom";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid/index.js";

export default function Body() {

    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0}
                          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                </svg>
            </div>
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div
                    className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Full Stack Developer</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Steven Rhett Studios
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                As a developer I am passionate about learning the latest software
                                innovations.
                                At present, I am personally invested in a project that I believe will
                                impact many people.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    />
                </div>
                <main className="bg-gradient-to-r from-indigo-100 to-transparent">
                    <div className="">
                        <div className="">
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
                            <p className="mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl">
                                <span className="text-indigo-600"></span>
                                <br/>
                            </p>
                            <div
                                className="mb-10 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div className="p-4 ml-6 lg:pr-4">
                                    <div className="mt-8 space-y-8 text-gray-600">
                                        <p>
                                        </p>
                                        <p className="mt-8">
                                            I am currently working on a project called{" "}
                                            <Link to="https://www.felontech.org"
                                                  className="font-semiBold text-indigo-800">
                                                FelonTech
                                            </Link>
                                            {" "}
                                            which is a social platform geared toward returning citizens
                                            wishing to learn or refresh on modern technology. It
                                            allows users to connect with and learn at a self-paced
                                            environment.
                                        </p>
                                        <p className="mt-6">
                                            I am also working on a project called{" "}
                                            <Link to="https://www.pawsome-github-io.vercel.app"
                                                  className="font-semiBold text-indigo-800">
                                                Pawsome
                                            </Link>{" "}
                                            <span> 🐾🐾 </span>
                                            which is a social platform geared toward pet owners and pet trainers.
                                        </p>
                                    </div>
                                    <button className="btn btn-wide bg-indigo-50 px-2 py-1 rounded">
                                        <Link to="/projects">Recent Work</Link>
                                    </button>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                                          aria-hidden="true"/>
                                                        <span>
                                <strong className="font-semibold text-gray-900">Push to deploy.</strong> Our Push to Deploy feature ensures hassle-free and seamless deployment of your website updates. With a simple command or
                        button click, your changes are automatically pushed from your development environment to the live production server.
                        This saves you time and eliminates the need for manual file transfers or complicated deployment processes.
                              </span>
                                                    </li>
                                        <li className="flex gap-x-3">
                                            <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"/>
                                            <span>
                                <strong className="font-semibold text-gray-900">SSL certificates.</strong> Security is paramount for any online business. Our SSL certificate service enables you to secure your website with
                        HTTPS, providing a secure connection between your visitors' browsers and your website. This not only protects sensitive
                        user data but also boosts customer trust and improves your website's search engine ranking. We take care of the entire
                        SSL certificate installation and renewal process, ensuring your website remains secure at all times.
                              </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                        aria-hidden="true"/>
                                            <span>
                                <strong className="font-semibold text-gray-900">Database backups.</strong> Data loss can be catastrophic for any business. Our automated database backup service ensures that your valuable website
                        data is protected. We schedule regular backups of your website's database, securely storing them in multiple locations.
                        In the event of accidental data deletion, server failures, or other emergencies, we can quickly restore your website to
                        its latest backed-up state, minimizing any potential downtime and data loss.
                              </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <div className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                 aria-hidden="true"/>
                                            <span>
                    <strong className="font-semibold text-gray-900">Why Choose Website Management?</strong>  Streamlined deployment process with Push to Deploy functionality.
                                        Enhanced security and customer trust with SSL certificates.
                                        Peace of mind with automated and reliable database backups.
                                        Dedicated support team available to assist you with any concerns.
                                        Tailored packages to meet your specific website management needs.
                                        Regular updates and improvements to ensure the highest level of service.
                                        By utilizing our Website Management Plus service, you can focus on growing your business while we handle the technical
                                    aspects of deploying updates, ensuring website security, and safeguarding your valuable data. Let us take care of these
                                    critical tasks, allowing you to concentrate on what you do best.
                  </span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}







