import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Root.module.css"
import { Link } from "react-router-dom";



const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Team", href: "/teams", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Calendar", href: "/calendar", current: false }

];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="bg-blue-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 lg:px-6">
                <div className="flex h-6 md:h-8 lg:h-10 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden  md:block lg:block">
                      <div className="ml-10 flex text-center space-x-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-blue-400 text-white"
                                : "text-gray-100 hover:w-fit hover:bg-blue-500 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex md:hidden lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex ml-2 mb-2.5 items-center justify-center rounded bg-blue-400 p-2 text-gray-100  hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="border-b border-gray-100 md:hidden lg:hidden">
                <div className="space-y-1 px-2 py-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-blue-400 text-white" : "hover:w-fit text-gray-100 hover:bg-blue-600 hover:text-white",
                        "block rounded-md px-3 py-2 font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </>
  );
}





