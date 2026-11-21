import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  title,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#18181D] text-[#A8A59E] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Camera className="w-6 h-6 mb-3 text-[#E8A045]" aria-hidden="true" />
        <p className="font-serif text-lg text-[#F5F0EA]">{title || 'Archival Plate'}</p>
        <p className="mt-1 text-xs text-[#84817C] max-w-[28ch]">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#18181D] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
