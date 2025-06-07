import { Link } from 'react-router';
import { cn } from '../../lib/utils';

type LogoProps = {
  variant?: 'small' | 'large';
  color?: 'blue' | 'black';
};
export default function Logo({
  variant = 'small',
  color = 'black',
}: LogoProps) {
  const size = variant === 'large' ? 'w-[47px] h-[46px]' : 'w-[37px] h-[35px]';
  const logoSrc = color === 'blue' ? '/logo_dark.png' : '/logo_blue.png';
  return (
    <Link to={'/'}>
      <span
        className={cn(
          'inline-flex justify-center items-center rounded-[8px]',
          color === 'blue' ? 'bg-v2' : 'bg-v2/10',
          size
        )}
      >
        <img
          className={cn(variant === 'small' ? 'w-[25px]' : 'w-[35px]')}
          src={logoSrc}
          alt='logo'
        />
      </span>
    </Link>
  );
}
