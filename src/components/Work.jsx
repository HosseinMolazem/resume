import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function Work() {
  return (
    <>
      <div className=' w-screen  h-screen   bg-hero-pattern3 bg-fixed relative bg-cover bg-center bg-no-repeat   '>
        <div className=' w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80'>
          <Zoom>
            <div className='ml-[560px]  w-96 h-40 flex justify-center items-center z-50 max-sm:w-44  max-sm:h-fit max-sm:ml-28'>
              <span className='text-yellow-500 text-5xl mt-10 font-bold max-sm:text-2xl '>
                Are you ready to work toghther?
              </span>
            </div>
          </Zoom>

          <Zoom>
            <div className='w-full h-full  flex justify-center items-center mt-32 max-sm:mt-10'>
              {" "}
              <span className='w-1/3 p-10 rounded-3xl flex-col bg-white bg-opacity-30   text-xl font-bold flex max-sm:w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sed debitis, tempora consequuntur similique corporis
                earum quae ut quibusdam obcaecati! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati sint fuga eius dolorum
                placeat? Architecto est nostrum vitae eius neque?
                <button className='w-full h-10 mt-5 bg-yellow-500 flex text-white justify-center items-center rounded-3xl hover:text-yellow-500 hover:bg-black '>
                  click
                </button>
              </span>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}
