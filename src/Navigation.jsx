import React, {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline';
import {Link, NavLink} from 'react-router-dom';
import {Bars4Icon} from '@heroicons/react/20/solid';
import logo from '/assets/Ste_Rhe.svg';

const navigation = [
	{name: 'Home', href: '/'},
	// { name: "Projects", href: "/projects" },
	// { name: "Calendar", href: "/calendar" },
];


export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const activeLink = 'font-bold'

	const showAlert = () => {
		alert('Button clicked!');


		return (
			<header className="bg-gray-100">
				<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link to={'/'} className="-m-1.5 p-1.5">
							<span className="sr-only">Steven Rhett Studios</span>
							<img src={logo} className="hidden lg:flex lg:h-48 w-auto"
								 alt=""/>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars4Icon className="h-8 w-10" aria-hidden="true"/>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<NavLink to={item.href} key={item.name}
									 className={({isActive}) => (isActive ? activeLink : '')}
							>
								{item.name}
							</NavLink>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						</a>
					</div>
				</nav>
				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-10"/>
					<Dialog.Panel
						className="fixed inset-y-0 right-0 z-10 w-full  overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link to={'/'} className="-m-1.5 p-1.5">
								<span className="sr-only">Steven Rhett Studio</span>
								<img
									className="h-28 w-auto"
									src={logo}
									alt=""
								/>
							</Link>
							<button
								type="button"
								onClick={showAlert}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								// onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true"/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<NavLink to={item.href}
												 onClick={showAlert}
												 key={item.name}
												 className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 hover:bg-gray-50"


										>
											{item.name}
										</NavLink>
									))}
								</div>
								<div className="py-6">

								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
		)
	}
}
