import React from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
  className?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = 'tsx',
  filename,
  className = ''
}) => {
  return (
    <div className={`relative bg-slate-900 rounded-xl overflow-hidden ${className}`}>
      {filename && (
        <div className="flex items-center px-4 py-2 text-slate-400 border-b border-slate-700/40">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm font-medium">{filename}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-slate-300 leading-relaxed">
          {children}
        </code>
      </pre>
    </div>
  )
}
