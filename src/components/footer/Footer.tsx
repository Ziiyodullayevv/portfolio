import Logo from '../logo/Logo';

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className='py-10 sm:py-20 gradient-custom text-white'>
      <div className='container-base'>
        {/* footer top  */}
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 items-center'>
          <div>
            <h3>Stay in the loop</h3>
            <p className='opacity-60'>
              Subscribe for the latest news & updates.
            </p>
          </div>
          <div className='flex gap-2 justify-between items-center bg-white/10 rounded-[10px] p-1.5 mt-5'>
            <input
              className='w-full text-sm h-[35px] px-3 rounded-md outline-none placeholder:text-sm'
              type='text'
              placeholder='my@gmail.com'
            />
            <button className='h-[35px] text-sm px-10 font-semibold rounded-md bg-white text-black'>
              Subscribe
            </button>
          </div>
        </div>

        {/* line */}
        <span className='w-full inline-block h-[0.5px] my-20 bg-white/10'></span>

        {/* footer bottom  */}
        <div className='flex flex-wrap gap-10 justify-between'>
          <div className='flex flex-col justify-end gap-2'>
            <Logo color='blue' />
            <p className='text-sm font-semibold text-v3/80 md:text-v1/70'>
              ©{year} Akobir Dev. All rights reserved.
            </p>
          </div>

          <div className='flex gap-10'>
            <div>
              <h3 className='font-semibold  text-v2 text-sm mb-2'>SITE</h3>
              <ul className='text-sm text-black flex flex-col gap-0.5'>
                <li className='opacity-60 hover:opacity-100'>Showcase</li>
                <li className='opacity-60 hover:opacity-100'>Blog</li>
                <li className='opacity-60 hover:opacity-100'>Docs</li>
                <li className='opacity-60 hover:opacity-100'>Download CV</li>
                <li className='opacity-60 hover:opacity-100'>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-v2 text-sm mb-2'>SOCIAL</h3>
              <ul className='flex flex-col text-black gap-0.5 text-sm'>
                <li className='opacity-60 hover:opacity-100'>
                  <a
                    href='https://github.com/Ziiyodullayevv'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </li>
                <li className='opacity-60 hover:opacity-100'>
                  <a
                    href='https://www.linkedin.com/in/akobir-ziyodullayev-9a26a2281/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='opacity-60 hover:opacity-100'>
                  <a
                    href='https://www.instagram.com/ziiyodullayevv/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </a>
                </li>
                <li className='opacity-60 hover:opacity-100'>
                  <a
                    href='http://t.me/akobirjs'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
