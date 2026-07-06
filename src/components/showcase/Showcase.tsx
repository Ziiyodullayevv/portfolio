import Logo from '../logo/Logo';
import ImageWithBlur from '../ui/imageWithBlur';
import SplitBox from '../ui/splitBox';
import SplitText from '../ui/splitText';
import { motion } from 'framer-motion';
import bg from '@/assets/images/bg.png';

// 💡 Har bir kartaning title, image va rangini bitta massivda saqlaymiz

const cards = [
  {
    title: 'Mock4IELTS',
    image: '/project-screenshots/mock4ielts.png',
    link: 'https://mock4ielts.uz/',
    color: 'bg-red-500',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Tailwind CSS'],
  },
  {
    title: 'Lunch Drop',
    image: '/project-screenshots/lunchdrop.png',
    link: 'https://lunchdrop.uz/',
    color: 'bg-emerald-500',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'MUI'],
  },
  {
    title: 'Urokids',
    image: '/project-screenshots/urokids.png',
    link: 'https://www.urokids.uz/ru',
    color: 'bg-cyan-400',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    title: 'Emirates Academy',
    image: '/project-screenshots/emiratesacademy.png',
    link: 'https://emiratesacademy.uz/',
    color: 'bg-orange-500',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'MyMotors Nurafshon',
    image: '/project-screenshots/mymotors.png',
    link: 'https://www.mymotorsnurafshon.uz/',
    color: 'bg-sky-500',
    stack: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: '1good',
    image: '/project-screenshots/onegood.png',
    link: 'https://www.1good.uz/',
    color: 'bg-blue-500',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Bulut Paper',
    image: '/project-screenshots/bulutpaper.png',
    link: 'https://www.bulutpaper.uz/',
    color: 'bg-green-500',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function Showcase() {
  return (
    <section className='py-20'>
      <div className='absolute inset-0 -z-10 opacity-15 [filter:hue-rotate(50deg)]'>
        <ImageWithBlur
          className='w-full object-cover h-full'
          src={bg}
          alt='bg image'
        />
      </div>
      <div className='container-base'>
        <div className='flex mt-20 flex-col relative justify-center'>
          <div className='text-center flex flex-col items-center gap-5'>
            <SplitBox duration={1} animateOnMount>
              <Logo variant='large' color='blue' />
            </SplitBox>
            <SplitText
              delay={0}
              animateOnMount
              className='text-[32px] md:text-5xl mx-auto 2xl:text-6xl font-semibold leading-10 md:leading-14 md:max-w-[380px] 2xl:max-w-[400px]'
            >
              Featured Projects
            </SplitText>

            <SplitText
              as='p'
              delay={0.1}
              animateOnMount
              className='text-base opacity-70 mx-auto max-w-[350px] 2xl:max-w-[370px] 2xl:text-lg'
            >
              A showcase of real-world projects that reflect my design thinking,
              coding skills, and creative problem-solving approach.
            </SplitText>
          </div>

          {/* 💡 Cards map */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5 flex-wrap'>
            {cards.map((card) => (
              <a
                key={card.link}
                href={card.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='card relative overflow-hidden border border-v3/5 bg-v7 rounded-md'
                >
                  <div className='aspect-video bg-v6 relative w-full'>
                    <ImageWithBlur
                      className='w-full h-full object-cover'
                      src={card.image}
                      alt={card.title + 'image'}
                    />
                  </div>
                  <div className='px-3 py-3 w-full bg-v7'>
                    <div className='flex justify-between items-center mb-2'>
                      <h4>{card.title}</h4>
                      <span
                        className={`w-2 h-2 rounded-full ${card.color}`}
                      ></span>
                    </div>
                    <div className='flex flex-wrap gap-1'>
                      {card.stack.map((tech) => (
                        <span
                          key={tech}
                          className='text-[10px] px-1.5 py-0.5 bg-v6/50 rounded text-white/60'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
