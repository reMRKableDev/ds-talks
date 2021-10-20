import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import SiteLink from '../shared/siteLink';
import SiteIcon from '../shared/siteIcon';
import { BRAND_NAME } from '../../lib/constants';

const Navbar = ({ showMenu, handleToggleMenu }) => (
  <Transition.Root show={showMenu} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 overflow-hidden"
      onClose={handleToggleMenu}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className=" flex align-center justify-between px-4 sm:px-6">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {BRAND_NAME}
                  </Dialog.Title>
                  <button type="button" onClick={handleToggleMenu}>
                    <span className="sr-only">Close panel</span>
                    <XIcon
                      className="block h-8 w-8 text-black dark:text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className="flex flex-col  align-center h-full">
                      <SiteLink linkTo="/" value="Home" />
                      <SiteLink linkTo="/map" value="Map" />
                      <p>Follow on Social Media</p>
                      <p>Support on Patreon</p>
                      <p>Subscribe to</p>
                    </div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);
export default Navbar;

/* <aside>
  <nav>
    <button type="button" onClick={handleToggleMenu}>
      <XIcon className="block h-8 w-8 text-black dark:text-white" aria-hidden="true" />
    </button>
    <div className="flex flex-col justify-between align-center">
      <div>
      <SiteLink linkTo="/" value="Home" />
      <SiteLink linkTo="/map" value="Map" />
      </div>
      
      <div>
      <p>Follow on Social Media</p>
      </div>
    </div>
  </nav>
</aside> */
