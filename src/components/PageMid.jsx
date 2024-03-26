import React from "react";
import { Zoom } from "react-awesome-reveal";
export default function PageMid() {
  return (
    <>
      <div className='w-screen h-screen overflow-hidden relative bg-hero-pattern bg-fixed max-sm:bg-hero-pattern bg-cover bg-center '>
        <div className='bg-black top-0 right-0 left-0 bottom-0 absolute bg-opacity-60  flex flex-col justify-center items-center font-bold text-4xl text-white    '>
          <Zoom>
            <span className='max-sm:text-lg max-sm:w-72 max-sm:ml-20  max-sm:flex  '>
              Lorem ipsum dolor sit amet, consectetur adipisicing ab.
            </span>
            <button className='px-20 text-black  rounded-3xl  mt-4 flex justify-center  hover:bg-black hover:text-yellow-500   bg-yellow-400 max-sm:px-5 max-sm:py-1 max-sm:text-lg'>
              Click
            </button>
          </Zoom>
        </div>
      </div>
    </>
  );
}
