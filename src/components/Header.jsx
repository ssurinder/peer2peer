import React, { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/svgs/logo.svg';
import LogoWhite from '../assets/svgs/logo_white.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { countries } from './../components/coutries.js'; 
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

const Header = () => {
  const { isAuthenticated } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Products', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'Why P2P', href: '/whyp2p', current: false },
  ];

  const classNames = (...classes) => classes.filter(Boolean).join(' ');
  const [selected, setSelected] = useState(countries[0]);

  // 🔒 Logged-in header
  if (isAuthenticated) {
    return (
      <div className="bg-blue-600 text-white pt-10 pb-6 px-4 flex items-center justify-between w-full relative z-0 after:absolute after:-bottom-5 after:left-0 after:w-full after:h-6 after:bg-blue-600 after:-z-10">
        <img src={LogoWhite} alt="Logo" className="h-8" />
        <Menu as="div" className="z-10 relative">
          <MenuButton className="inline-flex items-center gap-2 rounded-md border border-white px-2 py-1.5 text-sm font-semibold text-white ">
            {selected.flag && <img src={selected.flag} className="w-5 h-5" alt="flag" />}
            {selected.code}
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </MenuButton>

        <MenuItems  as="div"
          transition
          anchor="bottom end"
          className="z-10 bg-white w-52 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
        {countries.map((country) => (
          <MenuItem>
          {({ active }) => (
            <button
            onClick={() => setSelected(country)}
            className={`${
              active ? 'bg-gray-100' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-black`}
          >
            <img src={country.flag} className="w-5 h-5 mr-2" />
            {country.code}
          </button>
            )}
          </MenuItem>
           ))}
        </MenuItems>
      </Menu>
      </div>
    );
  }

  // 🔓 Public header
  return (
    <Disclosure as="nav" className="bg-white shadow-2xl relative z-[1]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-[var(--link-color)]'
                        : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <Link
                  to="/splash"
                  className="hidden rounded-xl py-3 px-6 text-base leading-5 text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]"
                >
                  Login/Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <Link
            to="/splash"
            className="hidden rounded-xl block py-3 px-6 text-base leading-5 text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]"
          >
            Login/Register
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
