import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Moneys() {
  return (
    <>
      <div className='bg-zinc-800 w-screen h-fit flex flex-col py-10  items-center'>
        <Zoom>
          <h1 className='text-white font-myfont text-5xl font-bold flex justify-center py-6 max-sm:text-2xl max-sm:ml-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
        </Zoom>
        <Zoom>
          <span className='text-yellow-500 flex justify-center mb-6 mt-4 text-3xl font-bold max-sm:text-xl'>
            Lorem ipsum dolor sit amet.
          </span>
        </Zoom>

        <div className='w-11/12 h-full flex justify-around mt-5 max-sm:flex-col items-center max-sm:hidden'>
          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>

          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>
          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>
        </div>
        <div className='w-full min-[700px]:hidden'>
          <Swiper
            className='w-full'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
          >
           <SwiperSlide className="">
              {" "}
              <Zoom>
                {" "}
                <div className='flex w-fit h-fit flex-col justify-center items-center max-sm:ml-4'>
                  <i className='text-5xl max-sm:text-4xl font-bold text-yellow-500 mb-5'>
                    {" "}
                    $200
                  </i>
                  <h1 className='w-40 text-yellow-500 text-2xl max-sm:text-xl'>
                    Lorem, ipsum.
                  </h1>
                  <span className='w-40 mt-2 text-xl text-white max-sm:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, reiciendis.
                  </span>
                </div>
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="">
              {" "}
              <Zoom>
                {" "}
                <div className='flex w-fit h-fit flex-col max-sm:ml-5 justify-center items-center'>
                  <i className='text-5xl max-sm:text-4xl font-bold text-yellow-500 mb-5'>
                    {" "}
                    $200
                  </i>
                  <h1 className='w-40 text-yellow-500 text-2xl max-sm:text-xl'>
                    Lorem, ipsum.
                  </h1>
                  <span className='w-40 mt-2 text-xl text-white max-sm:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, reiciendis.
                  </span>
                </div>
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="">
              {" "}
              <Zoom>
                {" "}
                <div className='flex max-sm:ml-5 w-fit h-fit flex-col justify-center items-center'>
                  <i className='text-5xl max-sm:text-4xl font-bold text-yellow-500 mb-5'>
                    {" "}
                    $200
                  </i>
                  <h1 className='w-40 text-yellow-500 text-2xl max-sm:text-xl'>
                    Lorem, ipsum.
                  </h1>
                  <span className='w-40 mt-2 text-xl text-white max-sm:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, reiciendis.
                  </span>
                </div>
              </Zoom>
            </SwiperSlide>
            <SwiperSlide className="">
              {" "}
              <Zoom>
                {" "}
                <div className='flex w-fit h-fit flex-col justify-center items-center'>
                  <i className='text-5xl max-sm:text-4xl font-bold text-yellow-500 mb-5'>
                    {" "}
                    $200
                  </i>
                  <h1 className='w-40 text-yellow-500 text-2xl max-sm:text-xl'>
                    Lorem, ipsum.
                  </h1>
                  <span className='w-40 mt-2 text-xl text-white max-sm:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, reiciendis.
                  </span>
                </div>
              </Zoom>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='w-11/12 h-full flex justify-around mt-16 max-sm:hidden'>
          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>
          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>
          <Zoom>
            {" "}
            <div className='flex w-fit h-fit flex-col justify-center items-center'>
              <i className='text-5xl font-bold text-yellow-500 mb-5'> $200</i>
              <h1 className='w-40 text-yellow-500 text-2xl'>Lorem, ipsum.</h1>
              <span className='w-40 mt-2 text-xl text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, reiciendis.
              </span>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}
