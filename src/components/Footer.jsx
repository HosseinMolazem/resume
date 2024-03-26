import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { TbBrandYoutube } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { Zoom } from "react-awesome-reveal";

export default function Footer() {
  return (
    <>
      <div className='w-screen h-fit bg-zinc-800 flex font-myfont font-bold text-lg text-white relative py-10 '>
        <div className=' h-full p-6 flex justify-around w-11/12 max-sm:flex-col max-sm:items-center'>
          <div className='max-sm:mb-10'>
            <h1 className='text-yellow-500 mb-5'>Logo Scallping</h1>
            <span className='w-28 flex justify-around items-center'>
              <i className='w-5 h-5 rounded-full bg-yellow-500'></i>{" "}
              <i className='w-5 h-5 rounded-full bg-yellow-500'></i>
              <i className='w-5 h-5 rounded-full bg-yellow-500'></i>
            </span>
          </div>
          <div className='flex flex-col w-40 h-fit max-sm:mb-10 max-sm:mr-10 '>
            <h2 className='text-3xl flex justify-center ml-10 max-sm:mb-4 '>testdc</h2>
            <ul className='w-64 cursor-pointer '>
              <Zoom>
                {" "}
                <li>Lorem ipsum dolor sit amet.</li>
              </Zoom>
              <Zoom>
                {" "}
                <Zoom>
                {" "}
                <li>Lorem ipsum dolor sit amet.</li>
              </Zoom>              </Zoom>              <li>Lorem ipsum dolor sit amet.</li>
              <Zoom>
                {" "}
                <li>Lorem ipsum dolor sit amet.</li>
              </Zoom>            </ul>
          </div>

          <div className='flex flex-col w-40 h-fit max-sm:mr-10 '>
            <Zoom>
              <h2 className='text-3xl w-52 flex justify-center  '>
                sotial media
              </h2>
            </Zoom>

            <ul className='w-52  items-center flex justify-center flex-col cursor-pointer '>
              <Zoom>
                <li className='flex justify-center items-center max-sm:mb-4 max-sm:mt-4'>
                  <FaInstagram className='text-yellow-500' />
                  instagram
                </li>
              </Zoom>
              <Zoom>
                {" "}
                <li className='flex justify-center items-center max-sm:mb-4'>
                  {" "}
                  <FaXTwitter className='text-yellow-500' />
                  twitter
                </li>
              </Zoom>
              <Zoom>
                <li className='flex justify-center items-center max-sm:mb-4'>
                  <TbBrandYoutube className='text-yellow-500' />
                  youtube
                </li>
              </Zoom>
              <Zoom>
                {" "}
                <li className='flex justify-center items-center max-sm:mb-4'>
                  {" "}
                  <PiTelegramLogo className='text-yellow-500' />
                  Telegram
                </li>
              </Zoom>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
