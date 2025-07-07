import Logo from '../logo/Logo';
import ImageWithBlur from '../ui/imageWithBlur';
import SplitBox from '../ui/splitBox';
import SplitText from '../ui/splitText';
import { motion } from 'framer-motion';
import bg from '@/assets/images/bg.png';
import { Link } from 'react-router';

// 💡 Har bir kartaning title, image va rangini bitta massivda saqlaymiz

const cards = [
  {
    title: '1good',
    image:
      'https://media.licdn.com/dms/image/v2/D4D12AQHNOxYDZoawxg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693327622536?e=2147483647&v=beta&t=NVTZm1JKy7VsLJa5QJbGRcUAIZuxIxLulx6HBzBE94w',
    link: 'https://www.1good.uz/',
    color: 'bg-blue-500',
  },
  {
    title: 'Bulut Paper',
    image: 'https://www.bulutpaper.uz/6.jpg',
    link: 'https://www.bulutpaper.uz/',
    color: 'bg-green-500',
  },
  {
    title: 'Vital',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9iHttWKurONYEnraGnsBG6Wk_W3RN8F9PQ&s',
    link: 'https://vital.uz/',
    color: 'bg-yellow-500',
  },
  {
    title: 'Iecg Certificate',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIQn2ETre8hq3rNQOatm6717ZwkMgtiE_CQ&s',
    link: 'https://iecgcertificate.uz/',
    color: 'bg-purple-500',
  },
  {
    title: 'Dreamtech',
    image:
      'https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=612x612&w=0&k=20&c=t8oAAO16j6fMhleAYJEXm5pSXFIDZrEG6sYJkv_Sdos=',
    link: 'https://www.dreamtech.uz/',
    color: 'bg-pink-500',
  },
];

export default function Showcase() {
  return (
    <section className='py-20'>
      <div className='absolute left-0 right-0 -top-[300px] -z-10 opacity-15 [filter:hue-rotate(50deg)]'>
        <ImageWithBlur
          className='w-full mx-auto h-full'
          src={bg}
          alt='bg image'
        />
      </div>
      <div className='container-base'>
        <div className='flex mt-20 flex-col relative justify-center'>
          <div className='text-center flex flex-col items-center gap-5'>
            <SplitBox duration={1}>
              <Logo variant='large' color='blue' />
            </SplitBox>
            <SplitText
              delay={0}
              className='text-[32px] md:text-5xl mx-auto 2xl:text-6xl font-semibold leading-10 md:leading-14 md:max-w-[380px] 2xl:max-w-[400px]'
            >
              Featured Projects
            </SplitText>

            <SplitText
              delay={0.1}
              className='text-base opacity-70 mx-auto max-w-[350px] 2xl:max-w-[370px] 2xl:text-lg'
            >
              A showcase of real-world projects that reflect my design thinking,
              coding skills, and creative problem-solving approach.
            </SplitText>
          </div>

          {/* 💡 Cards map */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5 flex-wrap'>
            {cards.map((card, index) => (
              <Link to={card.link}>
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='card relative overflow-hidden border border-v3/5 h-60 bg-v7 rounded-md'
                >
                  <div className='h-[calc(100%-40px)] bg-v6 relative w-full'>
                    <ImageWithBlur
                      className='w-full h-full object-cover'
                      src={card.image}
                      alt={card.title + 'image'}
                    />
                  </div>
                  <div className='h-10 absolute flex justify-between gap-4 items-center px-3 bottom-0 w-full bg-v7'>
                    <h4>{card.title}</h4>
                    {/* Rangni shu yerda qo'llaymiz */}
                    <span
                      className={`w-2 h-2 rounded-full ${card.color}`}
                    ></span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
