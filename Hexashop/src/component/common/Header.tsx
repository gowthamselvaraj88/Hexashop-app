"use client";
import React from "react";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="container bg-white border-y border-dotted-amber-80 rounded-none">
        <Navbar className="flex items-center justify-between flex-wrap bg-white-500 p-6">
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img
              src="/images/logo.png"
              className="mr-4 h-8 sm:h-10"
              alt="HEXASHOP"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
              About
            </Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Printing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
