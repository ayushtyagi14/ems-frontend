import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 mt-10 border-t-2">
      <div className="flex md:flex-row flex-col items-center justify-between gap-4 md:w-[90%] w-full mx-auto">
        <div className="flex flex-col">
          <img src="/logo.png" alt="Logo" className="h-20 w-60" />
          <p>&copy; 2023 EMS Xperience. All rights reserved.</p>
        </div>
        <div className="flex flex-row justify-evenly md:w-[80%] w-full my-6 md:my-0 mx-auto">
          <ul className="flex flex-col">
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">Privacy Policy</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">Imprint</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">
                  Terms and Conditions
                </span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">Right of Withdrawal</span>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">About Us</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">Contact Us</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">Goals</span>
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/">
                <span className="hover:text-gray-400">EMS Locations</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <span
            href="#"
            className="text-gray-400 hover:text-white cursor-pointer mx-1"
          >
            <img
              src="/instagram-icon.png"
              alt="instagram"
              className="h-6 w-6 mx-1"
            />
          </span>
          <span
            href="#"
            className="text-gray-400 hover:text-white cursor-pointer mx-1"
          >
            <img
              src="/facebook-icon.png"
              alt="facebook"
              className="h-6 w-6 mx-1"
            />
          </span>
          <span
            href="#"
            className="text-gray-400 hover:text-white cursor-pointer mx-1"
          >
            <img
              src="/twitter-icon.png"
              alt="twitter"
              className="h-6 w-6 mx-1"
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
