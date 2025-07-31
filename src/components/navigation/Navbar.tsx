import React from 'react'

interface NavbarProps {
  children: React.ReactNode
  brand?: React.ReactNode
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  brand,
  className = ''
}) => {
  return (
    <nav className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {brand && (
            <div className="flex-shrink-0">
              {brand}
            </div>
          )}
          <div className="flex space-x-8">
            {children}
          </div>
        </div>
      </div>
    </nav>
  )
}
