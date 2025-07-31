import React from 'react'

interface SidebarProps {
  sections: {
    title: string
    items: {
      id: string
      label: string
    }[]
  }[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSection,
  onSectionChange
}) => {
  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg mr-3"></div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">MotionVerse</h1>
            <p className="text-xs text-slate-500">Component Library</p>
          </div>
        </div>
        
        <nav className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onSectionChange(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-sky-50 text-sky-700 font-medium'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
