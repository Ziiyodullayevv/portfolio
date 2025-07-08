import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RiTelegram2Fill } from 'react-icons/ri';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router';
import { SiLeetcode } from 'react-icons/si';

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className='hover:opcity-50 text-sm cursor-pointer text-black font-semibold px-2 py-1 rounded-[8px] bg-white'
      >
        Contact Me
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative duration-300 transi z-50 focus:outline-none'
        onClose={close}
        __demoMode
      >
        <Transition show={isOpen}>
          <DialogBackdrop className='fixed transition backdrop-blur-md duration-300 ease-in data-closed:opacity-0 inset-0 bg-v1/50' />
        </Transition>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full flex-col mt-15 lg:mt-0 lg:flex-row p-10 max-w-lg lg:max-w-2xl gap-10 rounded-3xl bg-v5 backdrop-blur-2xl flex items-center duration-300 ease-out data-closed:transform-[scale(90%)] data-closed:opacity-0'
            >
              <Tilt>
                <div className='w-[200px] border border-v6 h-[200px] lg:w-[300px] shrink-0 lg:-ml-[80px] -mt-[100px] lg:mt-0 rounded-3xl overflow-hidden lg:h-[370px]'>
                  <img
                    className='h-full object-cover w-full'
                    src='https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-d494-51f7-9b8e-99723826fc8a/raw?se=2025-07-08T07%3A20%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=832c3c3c-b70a-5d33-9b54-489316a5b8a3&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T22%3A08%3A36Z&ske=2025-07-08T22%3A08%3A36Z&sks=b&skv=2024-08-04&sig=7nbMwEAGFdFxnk3b%2B6bi%2BzzRvVLt42fhaKRYX9r5HMU%3D'
                    alt='jpg'
                  />
                </div>
              </Tilt>
              <div>
                <h2 className='text-2xl sm:text-3xl font-semibold'>
                  Akobir Ziyodullayev
                </h2>
                <h4 className='text-xl sm:text-2xl my-3 text-white/80'>
                  Frontend Engineer
                </h4>
                <p className='text-white/60'>
                  Creates clean, efficient, and user-focused interfaces. Values
                  simplicity, performance, and teamwork to turn ideas into
                  reliable, scalable digital experiences.
                </p>

                <div className='mt-5 flex items-center gap-3'>
                  <Link
                    to={
                      'https://uz.linkedin.com/in/akobir-ziyodullayev-9a26a2281'
                    }
                    className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'
                  >
                    <FaLinkedinIn className='text-xl' />
                  </Link>

                  <Link
                    to={'https://leetcode.com/u/akobirjs/'}
                    className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'
                  >
                    <SiLeetcode className='text-xl' />
                  </Link>

                  <Link
                    to={'https://t.me/akobirjs'}
                    className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'
                  >
                    <RiTelegram2Fill className='text-xl' />
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
