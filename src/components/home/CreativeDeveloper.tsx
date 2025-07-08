import SectionTitle from '../title/SectionTitle';
import SplitBox from '../ui/splitBox';

export default function CreativeDeveloper() {
  return (
    <section className='py-10 md:py-20'>
      <div className='container-base'>
        <SectionTitle
          badge='DevSpark'
          title='Creative Developer'
          description='I build unique and visually engaging web experiences, optimized for performance, accessibility, and impact.'
        />
        <div className='grid grid-cols-1 lg:grid-cols-12 mt-10 gap-3'>
          <SplitBox className='bg-white/5 grid-cols-1 lg:col-span-8 relative rounded-3xl overflow-hidden h-[360px] sm:h-[400px]'>
            <video
              className='w-full h-full object-cover pointer-events-none will-change-transform'
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline
              src='/project.mp4'
            />

            <div className='absolute card-gradient p-8 flex flex-col justify-end left-0 right-0 bottom-0 bg-blue-500/10'>
              <h3>Real Projects</h3>
              <p className='max-w-[300px] opacity-50'>
                Over 10 real-world projects developed for clients or personal
                learning.
              </p>
            </div>
          </SplitBox>

          <SplitBox className='bg-white/5 relative overflow-hidden grid-cols-1 lg:col-span-4 rounded-3xl h-90 sm:h-100'>
            <img
              className='w-full absolute'
              src='https://images.pexels.com/photos/9667639/pexels-photo-9667639.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />
            <div className='absolute card-gradient p-8 flex flex-col justify-end left-0 right-0 bottom-0 bg-blue-500/10'>
              <h3>Clean Code Tidy</h3>
              <p className='max-w-[300px] opacity-50'>
                I write clean, maintainable, and scalable JavaScript/React code.
              </p>
            </div>
          </SplitBox>

          <SplitBox className='bg-white/5 relative overflow-hidden grid-cols-1 lg:col-span-4 rounded-3xl h-90 sm:h-100'>
            <img
              className='w-full h-full object-cover'
              src='https://images.pexels.com/photos/7063770/pexels-photo-7063770.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />
            <div className='absolute card-gradient p-8 flex flex-col justify-end left-0 right-0 bottom-0 top-[50] bg-blue-500/10'>
              <h3>Always Improving</h3>
              <p className='max-w-[300px] opacity-50'>
                Constantly learning new tools and best practices to stay sharp.
              </p>
            </div>
          </SplitBox>

          <SplitBox className='bg-white/5 relative overflow-hidden grid-cols-1 lg:col-span-4 rounded-3xl h-90 sm:h-100'>
            <img
              className='h-full w-full absolute object-cover'
              src='https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className='absolute card-gradient p-8 flex flex-col justify-end left-0 right-0 bottom-0 top-[50] bg-blue-500/10'>
              <h3>Community Involved</h3>
              <p className='max-w-[300px] opacity-50'>
                I contribute to developer communities, learning from others.
              </p>
            </div>
          </SplitBox>

          <SplitBox className='bg-white/5 relative overflow-hidden grid-cols-1 lg:col-span-4 rounded-3xl h-90 sm:h-100'>
            <img
              className='h-full w-full object-cover'
              src='https://images.pexels.com/photos/12899167/pexels-photo-12899167.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />
            <div className='absolute card-gradient p-8 flex flex-col justify-end left-0 right-0 bottom-0 top-[50] bg-blue-500/10'>
              <h3>Ready for Collaboration</h3>
              <p className='max-w-[300px] opacity-50'>
                Open to working with teams or individuals on exciting projects.
              </p>
            </div>
          </SplitBox>
        </div>
      </div>
    </section>
  );
}
