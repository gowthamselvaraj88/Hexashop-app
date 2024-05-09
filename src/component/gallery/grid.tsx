import React from "react";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex-auto">
        <figure className="relative">
          <img className="w-full" src="/images/baner-right-image-01.jpg" alt="" />
          <figcaption className="absolute px-4 text-lg text-white bottom-6 left-0 right-0 mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold">Women</p>
              <p className="text-sm p-3">Best clothes for Women</p>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex-auto">
        <figure className="relative">
          <img className="w-full" src="/images/baner-right-image-02.jpg" alt="" />
          <figcaption className="absolute px-4 text-lg text-white bottom-6 left-0 right-0 mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold">Men</p>
              <p className="text-sm p-3">Best clothes for Men</p>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex-auto">
        <figure className="relative">
          <img className="w-full" src="/images/baner-right-image-03.jpg" alt="" />
          <figcaption className="absolute px-4 text-lg text-white bottom-6 left-0 right-0 mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold">Kid's</p>
              <p className="text-sm p-3">Best clothes for Kids</p>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex-auto">
        <figure className="relative">
          <img className="w-full" src="/images/baner-right-image-04.jpg" alt="" />
          <figcaption className="absolute px-4 text-lg text-white bottom-6 left-0 right-0 mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold">Accessories</p>
              <p className="text-sm p-3">Best Trend Accessories</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Grid;
