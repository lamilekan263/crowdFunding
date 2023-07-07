import React, { useContext, useState } from 'react';
import { CrowdFundingContext } from '../Context/CrowdFunding';
import Logo from './Logo';
import Close from './Close';
import { Menu } from '.';
import { Log } from 'ethers';

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["White Paper", "Project", "Donation", "Members"];

  return (
    <div className='backgroundMain'>
      <div className='px-4 py-5 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
        <div className='relative flex items-center justify-between'>
          <div className="flex items-center">
            <a href="/home"
              aria-label='Company'
              title='Company'
              className='inline-flex items-center mr-8'
            >
              <Logo color="text-white" />
              <span className='ml-2 text-xl font-bold traccking-wide text-gray-100 uppercase'>
                Company
              </span>
            </a>

            <ul className='flex items-center hidden space-x-8 lg:flex'>
              {
                menuList.map((el, i) => (
                  <li key={ i + 1 }>
                    <a href="/home"
                      aria-label='Our Product'
                      title='Our Product'
                      className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
                    >
                      { el }
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          { !currentAccount && (
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              <li>
                <button onClick={ () => connectWallet() }
                  className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background'
                  title='Sign Up'
                  aria-label='Sign Up'
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          ) }
          <div className='lg:hidden z-40 '>
            <button aria-label='OpenMenu' title='Open Menu' className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={ () => setIsMenuOpen(true) }>
              <Menu />
            </button>
            { isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a href="/home"
                        aria-label='Company'
                        title='Company'
                        className='inline-flex items-center'
                      >
                        <Logo color="text-black" />
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={ () => setIsMenuOpen(false) }
                      >
                        <Close/> 
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      {
                        menuList.map((el, i) => (
                          <li key={ i + 1 }>
                            <a href=""
                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                              { el }
                            </a>
                          </li>
                        ))
                      }
                      <li>
                        <a href=""
                        className='inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                        >
                        Connect Wallet
                        </a> 
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            ) }
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;;