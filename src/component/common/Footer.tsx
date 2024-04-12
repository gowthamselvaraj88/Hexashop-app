import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className=" ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8  py-8 lg:py-12">
          <div className="justify-between placeholder:">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <img
                src="./images/white-logo.png"
                className="mr-4 h-8 sm:h-10"
                alt="HEXASHOP"
              />
            </h2>
            <ul className="text-white font-small">
              <li className="mb-2">
                16501 Collins Ave, Sunny Isles Beach, FL 33160, United States.
              </li>
              <li>
                <span className="text-white">hexashop@company.com</span>
              </li>
              <li>
                <span className="text-white">010-020-0340</span>
              </li>
            </ul>
          </div>
          <div className="flex">
            <h2 className="mb-6 text-white text-sm font-semibold uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Customer Center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Brand Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <h2 className="mb-6 text-white text-sm font-semibold uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <h2 className="flex mb-6 text-white text-sm font-semibold uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-white hover:underline">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col-reverse justify-between items-center md:flex-row md:items-center">
          <span className="text-sm text-white dark:text-gray-300">
            © 2023{" "}
            <Link href="https://flowbite.com/" className="text-white">
              Hexashop
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-5">
            <Link
              href="#"
              className="text-gray-400 hover:text-white-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 8 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white-900 dark:hover:text-white "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                 
                  clipRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                 clipRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                clipRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
               
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
