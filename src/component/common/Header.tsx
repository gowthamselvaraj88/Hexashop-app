"use client";
import React from "react";

import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";
const Header = () => {
  return (
    <section className="fixed z-10 w-full bg-white">
    <div className="h-1/2 px-4 md:px-6 lg:px-8 xl:px-20 2xl:px-auto">
      <div className="border-b border-dotted border-gray">
        <Navbar className="flex items-center justify-between flex-wrap bg-white-500">
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img
              src="/images/logo.png"
              className="p-3"
              width={200}
              height={200}
              alt="HEXASHOP"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" active className="text-gray-100 font-bold">
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/#mens">
              Men's
            </Navbar.Link>
            <Navbar.Link href="/#womens" className="font-bold">Women's</Navbar.Link>
            <Navbar.Link href="/#kids" className="font-bold">Kid's</Navbar.Link>
            <Dropdown label="Pages" className="font-bold" inline>
              <Dropdown.Item><Link href={"/about"}>About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/product"}>products</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/singleproduct"}>Single Products</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/contact"}>Contact Us</Link></Dropdown.Item>
            </Dropdown>
            <Dropdown label="Features" className="font-bold" inline>
              <Dropdown.Item>Features page 1</Dropdown.Item>
              <Dropdown.Item>Features page 2</Dropdown.Item>
              <Dropdown.Item>Features page 3</Dropdown.Item>
              <Dropdown.Item>Template page 4</Dropdown.Item>
            </Dropdown>
            <Navbar.Link href="/#explore" className="font-bold" >Explore</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
    </section>
  );
};

export default Header;
