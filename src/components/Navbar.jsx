"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [navStrip, setNavStrip] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setNavStrip(true);
  };

  const handleMouseLeave = () => {
    setNavStrip(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="pb-4 border-b-2">
      <div className="lg:w-[95%] lg:mx-auto">
        <nav className="container relative flex flex-row items-center justify-between lg:px-8 pt-4 lg:mx-auto lg:justify-between xl:px-0">
          <div>
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="flex flex-row items-center justify-between w-full">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="ems xperience"
                    width="150"
                    height="150"
                  />
                </Link>

                <button
                  onClick={() => setMenu(!menu)}
                  className={`lg:hidden ${
                    menu ? "fixed right-2" : "absolute right-2"
                  }`}
                >
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
                    alt="menu--v1"
                  />
                </button>
              </div>

              {menu && (
                <div className="flex flex-wrap w-[90%] mx-auto my-5 lg:hidden">
                  <Link
                    href="/"
                    className="w-full px-4 py-2 text-black rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none flex flex-row items-center justify-between"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    EMS Xperience
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-regular-kawalan-studio/24/external-chevron-down-user-interface-regular-kawalan-studio.png"
                      alt="external-chevron-down-user-interface-regular-kawalan-studio"
                    />
                  </Link>

                  {dropdown && (
                    <div className="flex flex-col items-start justify-center text-[14px]">
                      <Link
                        href="/ems-training"
                        className="inline-block px-4 py-2 ml-4 text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                      >
                        EMS Training
                      </Link>
                      <Link
                        href="/goals"
                        className="inline-block px-4 py-2 ml-4 text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                      >
                        Goals
                      </Link>
                      <Link
                        href="/team"
                        className="inline-block px-4 py-2 ml-4 text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                      >
                        Team
                      </Link>
                      <Link
                        href="/"
                        className="inline-block px-4 py-2 ml-4 text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="/"
                        className="inline-block px-4 py-2 ml-4 text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                      >
                        Book Session
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/ems-locations"
                    className="w-full px-4 py-2 text-black rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                  >
                    EMS Locations
                  </Link>
                  <Link
                    href="/xperience-network"
                    className="w-full px-4 py-2 text-black rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                  >
                    Xperience Network
                  </Link>
                  <Link
                    href="/"
                    className="w-full px-4 py-2 text-black rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                  >
                    XBody Spain
                  </Link>
                  <div className="flex flex-row items-center w-full justify-center">
                    <button>
                      <img
                        src="/instagram-icon.png"
                        alt="instagram"
                        className="h-6 w-6 mx-1"
                      />
                    </button>
                    <button>
                      <img
                        src="/facebook-icon.png"
                        alt="facebook"
                        className="h-6 w-6 mx-1"
                      />
                    </button>
                    <button>
                      <img
                        src="/twitter-icon.png"
                        alt="twitter"
                        className="h-6 w-6 mx-1"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden text-center lg:flex lg:flex-col lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <li className="mr-3 nav__item">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                  onMouseEnter={handleMouseEnter}
                >
                  EMS Xperience
                </Link>
              </li>
              <li className="mr-3 nav__item">
                <Link
                  href="/ems-locations"
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                >
                  EMS Locations
                </Link>
              </li>
              <li className="mr-3 nav__item">
                <Link
                  href="/xperience-network"
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                >
                  Xperience Network
                </Link>
              </li>
              <li className="mr-3 nav__item">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
                >
                  XBody Spain
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:items-center">
            <button>
              <img
                src="/instagram-icon.png"
                alt="instagram"
                className="h-6 w-6 mx-1"
              />
            </button>
            <button>
              <img
                src="/facebook-icon.png"
                alt="facebook"
                className="h-6 w-6 mx-1"
              />
            </button>
            <button>
              <img
                src="/twitter-icon.png"
                alt="twitter"
                className="h-6 w-6 mx-1"
              />
            </button>
          </div>
        </nav>
      </div>

      {navStrip && (
        <ul className="items-center text-center list-none hidden px-40 lg:flex lg:flex-row justify-evenly bg-[#c3c3c3] w-full">
          <li className="mr-3 nav__item">
            <Link
              href="/ems-training"
              className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
            >
              EMS Training
            </Link>
          </li>
          <li className="mr-3 nav__item">
            <Link
              href="/goals"
              className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
            >
              Goals
            </Link>
          </li>
          <li className="mr-3 nav__item">
            <Link
              href="/team"
              className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
            >
              Team
            </Link>
          </li>
          <li className="mr-3 nav__item">
            <Link
              href="/"
              className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
            >
              Contact Us
            </Link>
          </li>
          <li className="mr-3 nav__item">
            <Link
              href="/"
              className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-[#f10000] focus:text-[#f10000] focus:bg-indigo-100 focus:outline-none"
            >
              Book Session
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
