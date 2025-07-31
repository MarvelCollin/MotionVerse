import React from 'react'

interface SelectProps {
  options: { value: string; label: string }[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  error?: boolean
  className?: string
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  size = 'md',
  disabled = false,
  error = false,
  className = ''
}) => {
  const baseClasses = 'border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const stateClasses = error
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

  const disabledClasses = disabled
    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
    : 'bg-white text-gray-900'

  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${stateClasses} ${disabledClasses} ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
