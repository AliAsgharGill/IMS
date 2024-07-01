import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={
                "https://www.pngitem.com/pimgs/m/264-2640114_v-inventory-inventory-management-logo-hd-png-download.png"
              }
              alt="logo"
              width={200}
              height={700}
            />
            {/* <span className="ml-3 text-xl">Inventory Management System</span> */}
          </Link>
          <nav className="md:ml-auto flex flex-wrap space-x-4 items-center text-base justify-center">
            <Link href="/" mr-5>
              Home
            </Link>
            <Link href="/one" mr-5>
              Second Link
            </Link>
            <Link href="/two" mr-5>
              Third Link
            </Link>
            <Link href="/three" mr-5>
              Fourth Link
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
