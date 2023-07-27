import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {ChevronLeftIcon, MenuIcon} from "@heroicons/react/solid";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" }
];


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function Navigation() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5 ">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <ChevronLeftIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl">
                                        <div className="px-4 py-5 flex items-center justify-between border-b border-gray-200 sm:px-6">
                                            <h6 className="text-xl font-bold text-gray-900">stevenrhett</h6>
                                        </div>
                                        <div className="flex-auto px-6 py-10 pt-0">
                                            <nav className="flex flex-col">
                                                {navigation.map((item) => (
                                                    <a key={item.name} href={item.href} className=" p-3 block rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100">
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="sticky top-0 left-0 z-40 flex items-center gap-x-6 bg-white py-4 shadow px-6">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="lg:hidden h-6 w-6" aria-hidden="true" />
                    </button>

                </div>
            </div>
        </>
    )
}
