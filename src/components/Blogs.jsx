import React from "react";
import img from "../img/main.jpg";
import { Zoom } from "react-awesome-reveal";

export default function Blogs() {
  return (
    <>
      <div className=' w-screen h-fit flex justify-center py-5 bg-zinc-800 flex-col items-center '>
        <Zoom>
          {" "}
          <h1 className='text-4xl font-bold text-white'>Hello world</h1>
        </Zoom>
        <Zoom>
          <h3 className='text-yellow-500 mt-5 mb-5 text-lg font-bold max-sm:w-60 max-sm:ml-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            aperiam!
          </h3>
        </Zoom>
        <div className='w-3/5 flex justify-between mb-5 max-sm:flex-col'>
          <Zoom className='max-sm:mb-10'>
            <div className='w-fit flex flex-col'>
              <img className='w-60 h-40 rounded-xl' src={img} alt='' />
              <h1 className='font-myfont font-bold text-white text-2xl mt-2'>
                titles
              </h1>
              <span className='w-64 flex mt-1 text-neutral-950 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, cumque.
              </span>
              <button className='w-20 h-7 px-10 flex justify-center rounded-lg items-center mt-2 bg-yellow-500 hover:text-yellow-500 hover:bg-black'>
                click
              </button>
            </div>
          </Zoom>
          <Zoom className='max-sm:mb-10'>
            <div className='w-fit flex flex-col'>
              <img className='w-60 h-40 rounded-xl' src={img} alt='' />
              <h1 className='font-myfont font-bold text-white text-2xl mt-2'>
                titles
              </h1>
              <span className='w-64 flex mt-1 text-neutral-950 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, cumque.
              </span>
              <button className='w-20 h-7 px-10 flex justify-center rounded-lg items-center mt-2 bg-yellow-500 hover:text-yellow-500 hover:bg-black'>
                click
              </button>
            </div>
          </Zoom>
          <Zoom className='max-sm:mb-10'>
            <div className='w-fit flex flex-col'>
              <img className='w-60 h-40 rounded-xl' src={img} alt='' />
              <h1 className='font-myfont font-bold text-white text-2xl mt-2'>
                titles
              </h1>
              <span className='w-64 flex mt-1 text-neutral-950 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, cumque.
              </span>
              <button className='w-20 h-7 px-10 flex justify-center rounded-lg items-center mt-2 bg-yellow-500 hover:text-yellow-500 hover:bg-black'>
                click
              </button>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}
