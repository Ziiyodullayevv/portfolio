import { Github } from 'lucide-react';
import { Link } from 'react-router';
import Logo from '../logo/Logo';
import MyModal from '../ui/modal';

export default function Navbar() {
  return (
    <header className='fixed top-0 bg-v4/70 md:bg-transparent backdrop-blur-[8px] md:backdrop-blur-none w-full z-50'>
      <div className='container-navbar'>
        <div className='flex md:my-[10px] py-3 md:p-2 md:backdrop-blur-[8px] md:bg-v4/70 backdrop-filter-[8px] md:rounded-[10px] justify-between'>
          <Logo />
          <div className='flex gap-3 md:gap-5 items-center'>
            <Link
              className='text-sm opacity-70 hover:opacity-100'
              to={'/showcase'}
            >
              Showcase
            </Link>
            <a
              href='https://github.com/Ziiyodullayevv'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='size-4 cursor-pointer opacity-70 hover:opacity-100' />
            </a>
            <MyModal />
          </div>
        </div>
      </div>
    </header>
  );
}
