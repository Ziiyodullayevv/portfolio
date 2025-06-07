export default function Line({ techStack }: { techStack: string }) {
  return (
    <div className='flex items-center gap-3 my-10'>
      <span className='inline-block w-full border-b border-dashed border-white/10'></span>
      <span className='uppercase whitespace-nowrap text-sm text-white/10'>
        {techStack}
      </span>
      <span className='inline-block border-b border-white/10 w-full border-dashed'></span>
    </div>
  );
}
