import SectionTitle from '../title/SectionTitle';
import Line from './Line';

import js from '@/assets/icons/js.avif';
import react from '@/assets/icons/react.avif';
import ts from '@/assets/icons/ts.png';
import nextjs from '@/assets/icons/nextjs.png';
import tailwind from '@/assets/icons/tailwind.png';
import motion from '@/assets/icons/motion.png';
import bootsrap from '@/assets/icons/bootstrap.png';
import zustand from '@/assets/icons/zutand.png';
import redux from '@/assets/icons/redux.png';
import git from '@/assets/icons/git.png';
import figma from '@/assets/icons/figma.webp';
import vercel from '@/assets/icons/vercel.png';

export default function Skills() {
  return (
    <section className='py-20'>
      <div className='container-small'>
        <SectionTitle
          badge='Tech Stack'
          title='Driven by top-tier frontend expertise'
        />
        <Line techStack='Languages' />

        <div className='flex gap-10 justify-center'>
          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={js} alt='js logo' />
            JavaScript
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={ts} alt='js logo' />
            TypeScript
          </div>
        </div>

        <Line techStack='Frameworks' />

        <div className='flex gap-20 justify-center'>
          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={react} alt='js logo' />
            React
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5.5' src={nextjs} alt='js logo' />
            Next.js
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={react} alt='js logo' />
            React Native
          </div>
        </div>

        <Line techStack='Styling' />

        <div className='flex gap-10 justify-center'>
          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={tailwind} alt='js logo' />
            Tailwindcss
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5.5' src={bootsrap} alt='js logo' />
            Bootstrap
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={motion} alt='motion logo' />
            Framer Motion
          </div>
        </div>

        <Line techStack='State Management' />

        <div className='flex gap-17 justify-center'>
          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-10' src={zustand} alt='js logo' />
            Zustand
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5.5' src={redux} alt='js logo' />
            Redux
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={react} alt='motion logo' />
            Context API
          </div>
        </div>

        <Line techStack='Tools' />

        <div className='flex gap-30 justify-center'>
          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={git} alt='js logo' />
            Git
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5.5' src={vercel} alt='js logo' />
            Vercel
          </div>

          <div className='flex text-lg font-semibold items-center gap-2'>
            <img className='w-5' src={figma} alt='motion logo' />
            Figma
          </div>
        </div>
      </div>
    </section>
  );
}
