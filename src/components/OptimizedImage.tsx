import { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
}

export function OptimizedImage({ src, alt, webpSrc, width, height, loading, className, ...rest }: OptimizedImageProps) {
  const [didError, setDidError] = useState(false);

  const inferredWebp = webpSrc || (src.match(/\.(png|jpg|jpeg)$/i) ? src.replace(/\.(png|jpg|jpeg)$/i, '.webp') : null);

  if (didError || !inferredWebp) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <picture>
      <source srcSet={inferredWebp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        onError={() => setDidError(true)}
        {...rest}
      />
    </picture>
  );
}
