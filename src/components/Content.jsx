import React from "react";
import { Zoom } from "react-awesome-reveal";
import { IoSendSharp } from "react-icons/io5";

export default function Content() {
  return (
    <>
      <div className=' w-screen  h-80   bg-hero-pattern4 bg-fixed relative bg-cover bg-center bg-no-repeat   '>
        <div className=' w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 py-8'>
          <Zoom>
            <h1 className='text-white font-myfont text-5xl font-bold flex justify-center py-6 max-sm:text-2xl max-sm:ml-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
          </Zoom>
          <Zoom>
            <span className='text-yellow-500 flex justify-center mb-6 max-sm:mb-1 mt-4 text-3xl font-bold max-sm:text-xl'>
Enter your Email :)            </span>
          </Zoom>{" "}
          <div className='w-full h-fit flex justify-center relative '>
            <input
              className='w-1/2 p-2  rounded-2xl mt-10  '
              type='text'
              placeholder='Enter your Email'
            />
            <IoSendSharp className='w-11 absolute max-sm:top-[52px] top-[52px] right-96  max-sm:right-24  cursor-pointer  ' />
          </div>
        </div>
      </div>
    </>
  );
}
