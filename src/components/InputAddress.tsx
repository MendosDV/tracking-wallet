'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function InputAddress() {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
  const blockchains = [
    {
      name: 'Ethereum',
      logo: '/ethereum.svg',
      value: 'ethereum'
    },
    {
      name: 'Bitcoin',
      logo: '/bitcoin.svg',
      value: 'bitcoin'
    },
    {
      name: 'Solana',
      logo: '/solana.svg',
      value: 'solana'
    }
  ]

  const [ selectedBlockchain, setSelectedBlockchain ] = useState(blockchains[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const closeDropdown = (event : any) => {
      if (
        event.target.id !== 'dropdown-button' &&
        event.target.id !== 'dropdown' &&
        event.target.id !== 'dropdown-blockchain' &&
        !event.target.closest('#dropdown')
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      window.addEventListener('click', closeDropdown);
    }

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);

  return(
    <form action="submit" className="rounded-full text-white border-2	border-indigo-500 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/50 transition duration-500 px-4 mx-4 md:mx-0 md:w-2/3 lg:w-1/2 cursor-pointer text-xs md:text-sm relative">
      <div className="flex gap-4 px-4 py-2">
        <button
          onClick={toggleDropdown}
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center font-medium text-center border-r border-indigo-500 pr-4"
          type="button"
        >
          <span className="flex gap-3 mr-2" id="dropdown-blockchain">
            <Image
              src={selectedBlockchain.logo}
              alt={selectedBlockchain.name}
              width={20}
              height={20}
            />
            {selectedBlockchain.name}
          </span>
          <svg
            className="w-2.5 h-2.5 ms-2.5 text-indigo-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-zinc-900 divide-y divide-gray-100 absolute left-0 bottom-16 rounded-lg shadow w-44`}
        >
          <ul aria-labelledby="dropdown-button">
            {blockchains.map((blockchain) => (
              <li onClick={() => setSelectedBlockchain(blockchain)} className="flex gap-2 px-4 hover:bg-gray-700 transition duration-100 my-2" key={blockchain.value}>
                <Image
                  src={blockchain.logo}
                  alt={blockchain.name}
                  width={20}
                  height={20}
                />
                <p className="px-4 py-2">
                  {blockchain.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full">
          <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm bg-transparent appearance-none focus:outline-none focus:ring-0" placeholder="Please input an address" required />
          <button type="submit" className="invisible md:visible absolute top-0 end-0 h-full text-sm font-medium text-indigo-500">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}
