import { CheckCircle, Cpu, Flame, Search, Target } from 'lucide-react';
import Logo from '../logo/Logo';
import SplitText from '../ui/splitText';
import SplitBox from '../ui/splitBox';

export default function Hero() {
  return (
    <section className='min-h-screen relative overflow-hidden flex flex-col gap-10 justify-between items-center'>
      <div className='absolute -top-[0px] left-0 right-0 bottom-0 -z-10 opacity-15 overflow-hidden flex justify-center items-center [filter:hue-rotate(50deg)]'>
        <img
          className='w-full h-full object-cover'
          src='/bg.png'
          alt='background image'
        />
      </div>

      <div className='min-h-[50px] w-full'></div>

      <div className='text-center flex flex-col items-center gap-5'>
        <SplitBox duration={1}>
          <Logo variant='large' color='blue' />
        </SplitBox>
        <SplitText
          delay={0}
          className='text-[32px] md:text-5xl mx-auto 2xl:text-6xl font-semibold max-w-[250px] leading-10 md:leading-14 md:max-w-[380px] 2xl:max-w-[400px]'
        >
          Crafting ideas into code.
        </SplitText>

        <SplitText
          delay={0.1}
          className='text-base opacity-70 mx-auto max-w-[270px] 2xl:max-w-[320px] 2xl:text-lg'
        >
          A passionate web developer building fast, responsive apps using modern
          JavaScript tools.
        </SplitText>

        <div className='flex gap-3'>
          <SplitBox delay={0.4} y={10} duration={1}>
            <button className='h-[35px] backdrop-blur-sm cursor-pointer bg-white/10 rounded-[8px] flex items-center px-3'>
              Explore Projects
            </button>
          </SplitBox>

          <SplitBox delay={0.4} y={10} duration={1}>
            <button className='h-[35px] cursor-pointer bg-blue-600 px-3 rounded-[8px]'>
              Download CV
            </button>
          </SplitBox>
        </div>
      </div>
      <div className='container-base'>
        <div className='pb-10 grid grid-cols-3 lg:grid-cols-6 text-center gap-3 justify-center'>
          <div>
            <SplitBox delay={0.6} y={10}>
              <div className='flex flex-col items-center gap-2'>
                <Flame className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[120px] opacity-70'>
                  Passionate & creative
                </p>
              </div>
            </SplitBox>
          </div>

          <div>
            <SplitBox delay={0.7} y={10}>
              <div className='flex flex-col col-span-2 items-center gap-2'>
                <Target className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[120px] opacity-70'>
                  Clear & user-centered
                </p>
              </div>
            </SplitBox>
          </div>

          <div>
            <SplitBox delay={0.8} y={10}>
              <div className='flex flex-col col-span-2 items-center gap-2'>
                <CheckCircle className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[120px] opacity-70'>
                  Reliable & delivery-focused
                </p>
              </div>
            </SplitBox>
          </div>

          <div>
            <SplitBox delay={0.9} y={10}>
              <div className='flex flex-col col-span-2 items-center gap-2'>
                <Cpu className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[100px] opacity-70'>
                  Skilled in modern tech
                </p>
              </div>
            </SplitBox>
          </div>

          <div>
            <SplitBox delay={1} y={10}>
              <div className='flex flex-col lg:col-span-2 items-center gap-2'>
                <Search className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[120px] opacity-70'>
                  SEO-conscious design
                </p>
              </div>
            </SplitBox>
          </div>

          <div>
            <SplitBox delay={1} y={10}>
              <div className='flex flex-col lg:col-span-2 items-center gap-2'>
                <Search className='size-4.5' />
                <p className='text-xs sm:text-sm max-w-[120px] opacity-70'>
                  SEO-conscious design
                </p>
              </div>
            </SplitBox>
          </div>
        </div>
      </div>
    </section>
  );
}
