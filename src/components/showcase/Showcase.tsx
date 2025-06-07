import Logo from '../logo/Logo';
import SplitBox from '../ui/splitBox';

export default function Showcase() {
  return (
    <section className='py-20'>
      <div className='container-base'>
        <div className='flex mt-20 flex-col relative justify-center'>
          <div className='absolute -top-[200px] left-0 right-0 -z-10 opacity-15 overflow-hidden flex justify-center items-center [filter:hue-rotate(50deg)]'>
            <img src='/bg.png' alt='background image' />
          </div>

          <div className='flex justify-center flex-col items-center text-center gap-3'>
            <SplitBox duration={1}>
              <Logo variant='large' color='blue' />
            </SplitBox>
            <SplitBox
              delay={0}
              className='text-5xl xxl:text-6xl font-semibold max-w-[400px]'
            >
              Crafting ideas into code.
            </SplitBox>
          </div>

          <h2 className='text-2xl mt-20'>Portfolio</h2>
          <div className='grid grid-cols-4 mt-10 gap-3 flex-wrap'>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'>
              <div className=''></div>
            </div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
            <div className='card border border-v3/5 h-60 bg-v7 rounded-2xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
