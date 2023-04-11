import Image from "next/image";
import React from "react";
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white">
      {/* left */}
      <div className="relative flex items-center my-auto cursor-pointer ">
        <Image src="https://links.papareact.com/qd3" width={150} height={40} />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full">
        <input
          type="text"
          placeholder="search your place"
          className="pl-5 bg-transparent outline-none flex-grow"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-300 text-white rounded-full p-2 hidden md:inline-flex cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <UsersIcon className="h-6 hidden sm:inline-flex" />
        <div className="flex items-center border-2 p-2 rounded-full space-x-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
