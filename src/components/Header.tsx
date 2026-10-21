import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.webp";
import CurrentDate from "./CurrentDate";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <div className="relative flex flex-col items-center justify-center gap-5 md:min-h-20 md:flex-row">

          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="rounded-2xl bg-red-50 p-2 ring-1 ring-red-100">
              <Image
                src={Logo}
                alt="Bangla News 24 Logo"
                width={52}
                height={52}
                priority
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Bangla News{" "}
                <span className="text-red-600">24</span>
              </h1>

              <span className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                <CurrentDate />
              </span>
            </div>
          </Link>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-3 md:absolute md:right-0">
            <Link
              href="/login"
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              সাইন ইন
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
            >
              সাইন আপ
            </Link>
          </div>

        </div>
         <NavLinks/>
      </div>

      {/* Bottom Accent */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-orange-400" /> */}

     
    </header>
  );
};

export default Header;