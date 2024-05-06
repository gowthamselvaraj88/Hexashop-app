"use client";
import React from "react";

import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <section className="fixed z-10 w-full bg-white">
    <div className="mx-auto h-1/2 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="container mx-auto  border-b border-dotted-amber-80">
        <Navbar className="flex items-center justify-between flex-wrap bg-white-500">
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img
              src="/images/logo.png"
              className="p-3 lg:h-200 w-60"
              width={200}
              height={200}
              alt="HEXASHOP"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="/#mens">
              Men's
            </Navbar.Link>
            <Navbar.Link href="/#womens">Women's</Navbar.Link>
            <Navbar.Link href="/#kids">Kid's</Navbar.Link>
            <Dropdown label="Pages" inline>
              <Dropdown.Item><Link href={"/about"}>About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/product"}>products</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/singleproduct"}>Single Products</Link></Dropdown.Item>
              <Dropdown.Item><Link href={"/contact"}>Contact Us</Link></Dropdown.Item>
            </Dropdown>
            <Dropdown label="Features" inline>
              <Dropdown.Item>Features page 1</Dropdown.Item>
              <Dropdown.Item>Features page 2</Dropdown.Item>
              <Dropdown.Item>Features page 3</Dropdown.Item>
              <Dropdown.Item>Template page 4</Dropdown.Item>
            </Dropdown>
            <Navbar.Link href="/#explore">Explore</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
    </section>
  );
};

export default Header;
