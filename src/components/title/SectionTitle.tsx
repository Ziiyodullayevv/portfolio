import { cn } from '../../lib/utils';
import SplitBox from '../ui/splitBox';
import SplitText from '../ui/splitText';

type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left' | 'right';
};

export default function SectionTitle({
  badge,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'left'
      ? 'items-start text-left'
      : 'items-end text-right';

  return (
    <div className={cn('flex flex-col gap-3', alignment)}>
      {badge && (
        <SplitBox>
          <span className='bg-white/5 text-sm opacity-90 rounded-full px-3 py-1'>
            {badge}
          </span>
        </SplitBox>
      )}
      <SplitText as={'h2'} className='mx-auto text-4xl max-w-[350px]'>
        {title}
      </SplitText>
      {description && (
        <SplitText
          as={'p'}
          duration={1.4}
          className='font-semibold mx-auto opacity-60 max-w-[400px]'
        >
          {description}
        </SplitText>
      )}
    </div>
  );
}
