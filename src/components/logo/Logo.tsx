import { Link } from 'react-router';
import { cn } from '../../lib/utils';
import ImageWithBlur from '../ui/imageWithBlur';
import darkLogo from '@/assets/images/logo_dark.png';
import lightLogo from '@/assets/images/logo_blue.png';

type LogoProps = {
  variant?: 'small' | 'large';
  color?: 'blue' | 'black';
};
export default function Logo({
  variant = 'small',
  color = 'black',
}: LogoProps) {
  const size = variant === 'large' ? 'w-[47px] h-[46px]' : 'w-[37px] h-[35px]';
  const logoSrc = color === 'blue' ? darkLogo : lightLogo;
  return (
    <Link
      className={cn(
        'inline-flex justify-center items-center rounded-[8px]',
        color === 'blue' ? 'bg-v2' : 'bg-v2/10',
        size
      )}
      to={'/'}
    >
      <ImageWithBlur className='p-1' alt='logo' src={logoSrc} />
    </Link>
  );
}
