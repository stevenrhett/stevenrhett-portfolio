import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/teams" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "/calendar" }

];

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="bg-blue-400">
        {({ close }) => (
          <>
            <div className="mx-auto max-w-3xl px-4 lg:px-6">
              <div className="flex h-10 items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden  md:block lg:block">
                    <div className="ml-10 flex text-center space-x-6">
                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            isActive ? "rounded w-fit h-fit bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                              : "border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:h-fit hover:w-fit hover:rounded " +
                              "hover:h-fit hover:w-fit hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                          }
                          onClick={() => close()}
                        >
                          {item.name}
                        </NavLink>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex hidden">
              {/* Mobile menu button */}
              <Disclosure.Button
                className="inline-flex ml-2 mb-2.5 items-center justify-center rounded bg-blue-400 p-2 text-gray-100  hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white">
                <span className="sr-only">Open main menu</span>
                {close ? (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="border-b border-gray-100 md:hidden lg:hidden">
              <div className="space-y-1 px-2 py-3 sm:px-3">
                {navigation.map((item) => (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive ? "rounded w-fit bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                        : "border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:w-fit hover:rounded " +
                        "hover:w-fit hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    }
                    onClick={() => close()}
                  >
                    {item.name}
                  </NavLink>))}
              </div>
            </Disclosure.Panel>
          </>
        )}

      </Disclosure>
    </>
  );
}
