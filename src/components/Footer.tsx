import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
       <footer className="mt-10 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © 2026{" "}
          <span className="font-bold text-gray-900">
            BanglaBulletin
          </span>
          . All rights reserved.
        </p>

        {/* Source */}
        <p className="text-sm text-gray-600">
          Source:{" "}
          <Link
            href="https://www.bbc.com/bengali"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-600 transition hover:text-red-700 hover:underline"
          >
            BBC Bangla
          </Link>
        </p>
      </div>
    </footer>
    );
};

export default Footer;