import React, { useState } from 'react'

interface AlertProps {
  children: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  dismissible = false,
  onDismiss,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  }

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <div className={`border rounded-lg p-4 ${variantClasses[variant]} ${className}`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">{children}</div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-4 text-current hover:opacity-70 focus:outline-none"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}
