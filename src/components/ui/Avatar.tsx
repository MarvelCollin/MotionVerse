import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  fallback,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg'
  }

  const baseClasses = 'rounded-full bg-gray-300 flex items-center justify-center font-medium text-gray-700'

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      />
    )
  }

  return (
    <div className={`${baseClasses} ${sizeClasses[size]} ${className}`}>
      {fallback || alt.charAt(0).toUpperCase()}
    </div>
  )
}
