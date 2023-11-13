// import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react' //Menu, Transition ?
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; //BellIcon?
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>('/');


  return (
    <Disclosure as="nav" className="bg-rose-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                         currentPage === item.href ? 'bg-rose-900 text-white' : 'text-white hover:bg-rose-700',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={currentPage === item.href ? 'page' : undefined}
                        onClick={()=> setCurrentPage(item.href)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-rose-800 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700"
                >
                  <span className="absolute -inset-1.5" />
                  
                  <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
                  <div className='absolute bg-gray-700 rounded-full px-1 text-white text-sm -top-1 -right-1'>
                  <span className=''>{cartItemCount}</span>
                  </div>
                </button> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    currentPage === item.href ? 'bg-rose-900 text-white' : 'text-white hover:bg-rose-700 hover:text-gray-300',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={currentPage === item.href ? 'page' : undefined}
                  onClick={()=> setCurrentPage(item.href)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
