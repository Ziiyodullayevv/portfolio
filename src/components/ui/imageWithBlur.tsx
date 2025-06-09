import React, { useState } from 'react';
import clsx from 'clsx';

interface ImageWithBlurProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithBlur: React.FC<ImageWithBlurProps> = ({
  src,
  alt,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={clsx(
          className,
          'transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-50'
        )}
      />
      {!loaded && <div className='absolute z-10 bg-white backdrop-blur-lg' />}
    </>
  );
};

export default ImageWithBlur;
