import Logo from '../logo/Logo';
import ImageWithBlur from '../ui/imageWithBlur';
import SplitBox from '../ui/splitBox';
import SplitText from '../ui/splitText';
import { motion } from 'framer-motion';

// 💡 Har bir kartaning title, image va rangini bitta massivda saqlaymiz
const cards = [
  {
    title: 'Enter Animation',
    image:
      'https://sun9-50.userapi.com/impf/c840621/v840621666/40158/IB9IEyKJ3mg.jpg?size=604x403&quality=96&sign=5758dc7f8afc452981ec408b4c86c432&type=album',
    color: 'bg-red-500',
  },
  {
    title: 'Dashboard UI',
    image:
      'https://image.winudf.com/v2/image1/cmVkcGFuZGF3YWxscGFwZXIubXVhbmdyaXRfc2NyZWVuXzNfMTU2NzAxOTMwOF8wMDg/screen-3.jpg?fakeurl=1&type=.jpg',
    color: 'bg-green-500',
  },
  {
    title: 'Portfolio Design',
    image:
      'https://image.winudf.com/v2/image1/Y29tLmFwcDNkd2FsbHBhcGVyaGQucmFjY29vbndhbGxwYXBlcl9zY3JlZW5fN18xNTY3MDI2NTU5XzAzOA/screen-7.jpg?fakeurl=1&type=.jpg',
    color: 'bg-blue-500',
  },
  {
    title: 'E-Commerce App',
    image:
      'https://ekaterinburg.oboitd.ru/images/goods/big/20221003104445_Lev_3276-M.jpg',
    color: 'bg-yellow-500',
  },
  {
    title: 'Blog Page',
    image:
      'https://avatars.mds.yandex.net/i?id=74b47983ff309f334bbefaf5882e6348c4db743b-9149651-images-thumbs&n=13',
    color: 'bg-purple-500',
  },
  {
    title: 'Task Manager',
    image: 'https://wallpaperaccess.com/full/3979387.jpg',
    color: 'bg-pink-500',
  },
  {
    title: 'Mobile UI',
    image:
      'https://www.tapeciarnia.pl/tapety/normalne/94980_zebra_mlode_trawa.jpg',
    color: 'bg-orange-500',
  },
  {
    title: 'Landing Page',
    image:
      'https://i.pinimg.com/736x/51/3d/b2/513db2aa51e8a5043469c185f38f8f64.jpg',
    color: 'bg-emerald-500',
  },
  {
    title: 'Admin Panel',
    image:
      'https://cdn.pixabay.com/photo/2020/07/08/21/32/tucan-5385244_1280.jpg',
    color: 'bg-teal-500',
  },
  {
    title: 'Chat App',
    image:
      'https://image.winudf.com/v2/image/Y29tLmFydHVyLkxlb3BhcmRXYWxscGFwZXJzX3NjcmVlbnNob3RzXzNfNzA4NTk0ZjA/screen-3.jpg?fakeurl=1&type=.jpg',
    color: 'bg-cyan-500',
  },
];

export default function Showcase() {
  return (
    <section className='py-20'>
      <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-15 overflow-hidden flex justify-center items-center [filter:hue-rotate(50deg)]'>
        <SplitBox>
          <img
            className='w-full h-full object-cover'
            src='/bg.png'
            alt='background image'
          />
        </SplitBox>
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
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='card relative overflow-hidden border border-v3/5 h-60 bg-v7 rounded-md'
              >
                <div className='h-[calc(100%-40px)] relative w-full'>
                  {/* <img
                    className='w-full h-full object-cover'
                    src={card.image}
                    alt={card.title}
                  /> */}

                  <ImageWithBlur
                    className='w-full h-full object-cover'
                    src={card.image}
                    alt={card.title + 'image'}
                  />
                </div>
                <div className='h-10 absolute flex justify-between gap-4 items-center px-3 bottom-0 w-full bg-v7'>
                  <h4>{card.title}</h4>
                  {/* Rangni shu yerda qo'llaymiz */}
                  <span className={`w-2 h-2 rounded-full ${card.color}`}></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
