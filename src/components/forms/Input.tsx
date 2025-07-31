import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
  value?: string
  onChange?: (value: string) => void
}

export const Input: React.FC<InputProps> = ({
  label,
  error = false,
  helperText,
  size = 'md',
  value,
  onChange,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors duration-200'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

  const disabledClasses = props.disabled
    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
    : 'bg-white text-gray-900'

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        {...props}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClasses} ${className}`}
      />
      {error && typeof error === 'string' && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  )
}
