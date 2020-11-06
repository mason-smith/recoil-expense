import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// tailwind dependencies
import { Transition } from '@tailwindui/react';

// Local Dependencies
import { DesktopLinks } from './DesktopLinks';
import { MobileMenu } from './MobileMenu';
import { MobileButton } from './MobileButton';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        role="navigation"
        className="fixed w-screen z-50 bg-white lg:w-full shadow-md"
      >
        <div className="relative py-2 px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <img
                    className="h-8 w-auto sm:h-10 border-black"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                    alt="Logo"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <MobileButton onClick={() => setIsOpen(!isOpen)} />
                </div>
              </div>
            </div>
            <DesktopLinks />
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <MobileMenu onClick={() => setIsOpen(!isOpen)} />
        </Transition>
      </nav>
      <div className="pt-20" />
    </>
  );
};
