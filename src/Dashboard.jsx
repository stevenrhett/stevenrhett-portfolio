import React, {Fragment, useState} from "react";
import {NavLink} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";
import {
    Bars3BottomLeftIcon, CogIcon, HomeIcon, PhotoIcon, RectangleStackIcon, Squares2X2Icon, UserGroupIcon, XMarkIcon,
} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import Body from "./Body.jsx";
import classes from "./Root.module.css";

const sidebarNavigation = [{name: "Home", href: "/", icon: HomeIcon, current: true}, {
    name: "My Work", href: "/projects", icon: Squares2X2Icon, current: false
}, {name: "Photos", href: "/photos", icon: PhotoIcon, current: false}, {
    name: "Shared", href: "/shared", icon: UserGroupIcon, current: false
}, {name: "Albums", href: "/albums", icon: RectangleStackIcon, current: false}, {
    name: "Settings", href: "/settings", icon: CogIcon, current: false
},];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (<>
        <div className="flex min-h-fit">
            {/* Narrow sidebar */}

            <div className="hidden w-28 overflow-y-auto bg-purple-200 md:hidden md:block">
                <div className="flex w-full flex-col items-center py-6">
                    <div className="mt-6 w-full flex-1 space-y-1 px-2">
                        <NavLink
                            to='/'
                            className={({isActive}) => isActive ? classes.active : undefined}
                            activeClassName={classes.active} end

                        />


                    </div>
                </div>
            </div>

            {/* Mobile menu */}

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-20 md:hidden"
                    onClose={setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-purple-400 bg-opacity-75"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel
                                className="relative flex w-full max-w-xs flex-1 flex-col bg-purple-200 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-1 right-0 -mr-14 p-1">
                                        <button
                                            type="button"
                                            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">Close sidebar</span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <img className="h-8 w-auto" src={""} alt={""}/>
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                    <nav className="flex h-full flex-col">
                                        <div className="space-y-1">
                                            {sidebarNavigation.map((item) => (<a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(item.current ? "bg-purple-400 text-purple-900" : "text-purple-900 hover:bg-purple-400 hover:text-purple-900", "group py-2 px-3 rounded-md flex items-center text-sm font-medium")}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                <item.icon
                                                    className={classNames(item.current ? "text-white" : "text-purple-900 group-hover:text-white", "mr-3 h-6 w-6")}
                                                    aria-hidden="true"
                                                />
                                                <span>{item.name}</span>
                                            </a>))}
                                        </div>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Content area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="w-full">
                    <div className="relative z-10 flex h-16 flex-shrink-0 hover:bg-white bg-purple-50 shadow-sm">
                        <button
                            type="button"
                            className=" px-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                        <div className="flex flex-1 justify-between px-4 sm:px-6">
                            <div className="flex flex-1">
                                <form
                                    className="flex w-full bg-purple-200 md:ml-0"
                                    action="#"
                                    method="GET"
                                >
                                    <label htmlFor="search-field" className="sr-only">
                                        Search all files
                                    </label>
                                    <div className="relative w-full text-purple-900 focus-within:text-purple-900">
                                        <div
                                            className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                            <MagnifyingGlassIcon
                                                className="h-5 w-5 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <input
                                            name="search-field"
                                            id="search-field"
                                            className="h-full bg-purple-50 w-full hover:bg-white border-transparent py-2 pl-8 pr-3 text-purple-900 placeholder-purple-500 focus:border-transparent focus:placeholder-purple-400 focus:outline-none focus:ring-0"
                                            placeholder="Search"
                                            type="search"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-2 flex  items-center space-x-4 sm:ml-6 sm:space-x-6">

                                <progress
                                    active={"true"}
                                    className="progress progress-primary bg-base sm:w-14 md:w-28 lg:w-56"></progress>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main content */}
                <Body/>
                <div className="flex flex-1 items-stretch">
                    <main className="flex-1 overflow-y-auto">
                        {/* Your content */}
                        {/* Primary column */}

                        <section
                            aria-labelledby="primary-heading"
                            className="flex h-full min-w-0 flex-1 flex-col lg:order-last"
                        >
                            <h1 id="primary-heading" className="sr-only">
                                Photos
                            </h1>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    </>);
}