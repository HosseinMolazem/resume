import React from "react";
import { Zoom } from "react-awesome-reveal";

import { slide as Menus } from "react-burger-menu";

export default function Menu() {
  return (
    <>
      <div className='w-screen h-fit bg-zinc-800 flex font-myfont font-bold text-lg text-white relative  '>
        <div className='w-3/6 h-fit'>
          <Zoom className='relative z-50'>
            <div className='bg-yellow-500 z-50   w-44 h-40 absolute left-20 clip-polygon flex justify-center  max-sm:hidden  '>
              <span className='mt-5 text-black text-2xl'>My logo</span>
            </div>
          </Zoom>
        </div>
        <div className='w-3/6 h-full max-sm:hidden '>
          <Zoom>
            <ul className=' w-full flex justify-around py-8 px-10 text-xl '>
              <li className='hover:text-yellow-500 cursor-pointer'>Home</li>
              <li className='hover:text-yellow-500 cursor-pointer'>About Us</li>
              <li className='hover:text-yellow-500 cursor-pointer'>Content</li>
              <li className='hover:text-yellow-500 cursor-pointer'>Project</li>
              <li className='hover:text-yellow-500 cursor-pointer'>test</li>
            </ul>
          </Zoom>
        </div>
        {/* Start menu hambergery */}

        <div className='  min-[700px]:hidden absolute left-0 top-0      '>
          <Menus width={200} className='w-20 bg-slate-50'>
            <a className='menu-item mb-5 ' href='/'>
              Home
            </a>
            <a className='menu-item mb-5' href='/salads'>
              About
            </a>
            <a className='menu-item mb-5' href='/pizzas'>
              Menu
            </a>
            <a className='menu-item mb-5' href='/desserts'>
              Gallery
            </a>
          </Menus>
        </div>
        {/* End menu hambergery */}
      </div>
    </>
  );
}
