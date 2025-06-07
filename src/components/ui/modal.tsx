import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { RiTelegram2Fill } from 'react-icons/ri';
import { useState } from 'react';

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
              className='w-full p-10 max-w-2xl gap-10 rounded-3xl bg-v5 backdrop-blur-2xl flex items-center duration-300 ease-out data-closed:transform-[scale(90%)] data-closed:opacity-0'
            >
              <div className='w-[300px] shrink-0 -ml-[80px] rounded-3xl overflow-hidden h-[370px]'>
                <img
                  className='h-full object-cover w-full'
                  src='https://www.unicajabanco.es/content/dam/unicaja/unicaja-corporacion/galeria-corporacion/noticias/campana-nomina-2018-unicajabanco-portada.jpg'
                  alt='jpg'
                />
              </div>
              <div>
                <h2 className='text-3xl font-semibold'>Akobir Ziyodullayev</h2>
                <h4 className='text-2xl my-3 text-white/80'>
                  Frontend Engineer
                </h4>
                <p className='text-white/60'>
                  Creates clean, efficient, and user-focused interfaces. Values
                  simplicity, performance, and teamwork to turn ideas into
                  reliable, scalable digital experiences.
                </p>

                <div className='mt-5 flex items-center gap-3'>
                  <div className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'>
                    <FaLinkedinIn className='text-xl' />
                  </div>

                  <div className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'>
                    <FaInstagram className='text-xl' />
                  </div>

                  <div className='w-11 group hover:outline-2 outline-offset-3 outline-v2 cursor-pointer h-11 bg-white/10 rounded-full flex justify-center items-center'>
                    <RiTelegram2Fill className='text-xl' />
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
