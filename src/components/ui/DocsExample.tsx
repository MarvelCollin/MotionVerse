import React, { useState } from 'react'

interface DocsExampleProps {
  title: string
  description?: string
  children: React.ReactNode
  code: string
  filename?: string
  preview?: boolean
}

export const DocsExample: React.FC<DocsExampleProps> = ({
  title,
  description,
  children,
  code,
  filename,
  preview = true
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <div className="not-prose my-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        {description && (
          <p className="text-slate-600 text-base leading-6">{description}</p>
        )}
      </div>
      
      <div className="bg-white rounded-xl ring-1 ring-slate-900/10 overflow-hidden">
        {preview && (
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'preview'
                  ? 'border-sky-500 text-sky-600 bg-sky-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-sky-500 text-sky-600 bg-sky-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Code
            </button>
          </div>
        )}
        
        {activeTab === 'preview' && (
          <div className="p-6 bg-white">
            {children}
          </div>
        )}
        
        {activeTab === 'code' && (
          <div className="bg-slate-900">
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-slate-300 leading-relaxed">
                {code}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
