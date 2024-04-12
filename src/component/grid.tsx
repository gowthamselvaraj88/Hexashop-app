import Link from "next/link";
import React from "react";

const Grid = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
      <div className="mb-20 lg:mb-0">
        <Link className="relative bg-gray-900 group " href="##">
          <img
            className="absolute  object-cover opacity group-hover:opacity-50"
            src="/images/baner-right-image-01.jpg"
          />
          <div className="p-14 lg:p-0 transition-all transform translate-y-8 opacity-100 group-hover:opacity-0 group-hover:translate-y-0">
            {" "}
            <p className="text-2xl font-bold p-2 mt-10 flex absolute  text-white hover:text-black">
              WOMEN
              <span className="text-lg my-5 p-2">Best clothes for Women</span>
            </p>
          </div>
          <div className="p-2 relative transition-all transform translate-y-18 opacity-0 group-hover:opacity-100
           group-hover:translate-y-0">
            <h4 className="text-lg text-white">women</h4>
            <p className="text-lg text-white flex">
              Lorem ipsum dolor sit amet,conservisii ctetur adipiscing elit
              incid
            </p>
            <button className="px-4 py-2 text-sm text-white border-solid border border-indigo-100">
              Discover More
            </button>
          </div>
        </Link>
      </div>
      <div className="mb-20 lg:mb-0">
        <Link className="relative bg-gray-900 group " href="##">
          <img
            className="absolute  object-cover opacity group-hover:opacity-50"
            src="/images/baner-right-image-02.jpg"
          />
          <div className="p-14 lg:p-0 transition-all transform translate-y-8 opacity-100 group-hover:opacity-0 group-hover:translate-y-0">
            
            <p className="text-2xl font-bold p-2 mt-10 flex absolute  text-white hover:text-black">
              WOMEN
              <span className="text-lg my-5 p-2">Best clothes for Women</span>
            </p>
          </div>
          <div className="p-2 relative transition-all transform translate-y-18 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <h4 className="text-lg text-white">women</h4>
            <p className="text-lg text-white flex">
              Lorem ipsum dolor sit amet,conservisii ctetur adipiscing elit
              incid
            </p>
            <button className="px-4 py-2 text-sm text-white border-solid border border-indigo-100">
              Discover More
            </button>
          </div>
        </Link>
      </div>
      <div className="mb-20 md:mb-0 mt-1">
        <Link className="relative bg-gray-900 group " href="##">
          <img
            className="absolute object-cover opacity group-hover:opacity-50"
            src="/images/baner-right-image-03.jpg"
          />
          <div className="p-14 lg:p-0 transition-all transform translate-y-8 opacity-100 group-hover:opacity-0 group-hover:translate-y-0">
            {" "}
            <p className="text-2xl font-bold p-2 mt-10 flex absolute  text-white hover:text-black">
              WOMEN
              <span className="text-lg my-5 p-2">Best clothes for Women</span>
            </p>
          </div>
          <div className="p-2 relative transition-all transform translate-y-18 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <h4 className="text-lg text-white">women</h4>
            <p className="text-lg text-white">
              Lorem ipsum dolor sit amet,conservisii ctetur adipiscing elit
              incid
            </p>
            <button className="px-4 py-2 text-sm text-white border-solid border border-indigo-100">
              Discover More
            </button>
          </div>
        </Link>
      </div>
            <div className="mb-20 md:mb-0 mt-1 ">
        <Link className="relative bg-gray-900 group " href="##">
          <img
            className="absolute  object-cover opacity group-hover:opacity-50"
            src="/images/baner-right-image-04.jpg"
          />
          <div className="p-14 lg:p-0  transition-all transform translate-y-8 opacity-100 group-hover:opacity-0 group-hover:translate-y-0">
            {" "}
            <p className="text-2xl font-bold p-2 mt-10 flex absolute  text-white hover:text-black">
              WOMEN
              <span className="text-lg my-5 p-2">Best clothes for Women</span>
            </p>
          </div>
          <div className="p-2 relative transition-all transform translate-y-18 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <h4 className="text-lg text-white">women</h4>
            <p className="text-lg text-white flex">
              Lorem ipsum dolor sit amet,conservisii ctetur adipiscing elit
              incid
            </p>
            <button className="px-4 py-2 text-sm text-white border-solid border border-indigo-100">
              Discover More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Grid;
