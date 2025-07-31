import React, { useState } from 'react'
import { 
  Button, Badge, Avatar, Progress, DocsExample,
  Card, Container, Grid,
  Input, Select, Checkbox,
  Alert, Spinner,
  Navbar, Tabs, Sidebar
} from '../components'

export const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('button')
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [progress, setProgress] = useState(65)

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const sidebarSections = [
    {
      title: 'Getting Started',
      items: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'installation', label: 'Installation' },
        { id: 'usage', label: 'Usage' }
      ]
    },
    {
      title: 'Components',
      items: [
        { id: 'button', label: 'Button' },
        { id: 'badge', label: 'Badge' },
        { id: 'avatar', label: 'Avatar' },
        { id: 'progress', label: 'Progress' },
        { id: 'card', label: 'Card' },
        { id: 'container', label: 'Container' },
        { id: 'grid', label: 'Grid' },
        { id: 'input', label: 'Input' },
        { id: 'select', label: 'Select' },
        { id: 'checkbox', label: 'Checkbox' },
        { id: 'alert', label: 'Alert' },
        { id: 'spinner', label: 'Spinner' },
        { id: 'navbar', label: 'Navbar' },
        { id: 'tabs', label: 'Tabs' }
      ]
    }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">MotionVerse</h1>
            <p className="text-xl text-slate-600 leading-8 mb-8">
              A comprehensive collection of beautifully designed, accessible React components built with TypeScript and Tailwind CSS.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">12+</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Components</h3>
                <p className="text-slate-600 text-sm">Carefully crafted components for modern web applications.</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">TypeScript</h3>
                <p className="text-slate-600 text-sm">Built with TypeScript for excellent developer experience.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">A11y</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Accessible</h3>
                <p className="text-slate-600 text-sm">Designed with accessibility and usability in mind.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Features</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fully responsive and mobile-first design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Consistent API design across all components
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tree-shakable imports for optimal bundle size
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dark mode support (coming soon)
              </li>
            </ul>
          </div>
        )

      case 'installation':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Installation</h1>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
            <p className="text-slate-600 mb-6">
              MotionVerse requires the following dependencies in your React project:
            </p>
            
            <ul className="space-y-2 text-slate-600 mb-8">
              <li>React 18.0 or higher</li>
              <li>TypeScript 4.5 or higher (optional but recommended)</li>
              <li>Tailwind CSS 3.0 or higher</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Setup</h2>
            <p className="text-slate-600 mb-6">
              Copy the components you need into your project's component directory:
            </p>

            <div className="bg-slate-900 rounded-xl p-4 mb-6 not-prose">
              <pre className="text-slate-300 text-sm">
                <code>{`src/
  components/
    ui/
      Button.tsx
      Badge.tsx
      Avatar.tsx
      ...
    layout/
      Card.tsx
      Container.tsx
      ...`}</code>
              </pre>
            </div>
          </div>
        )

      case 'usage':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Usage</h1>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Import Components</h2>
            <p className="text-slate-600 mb-6">
              Import components from their respective categories or from the main index:
            </p>

            <div className="bg-slate-900 rounded-xl p-4 mb-8 not-prose">
              <pre className="text-slate-300 text-sm">
                <code>{`// Import from main index
import { Button, Badge, Card } from '../components'

// Import from specific categories
import { Button, Badge } from '../components/ui'
import { Card, Container } from '../components/layout'`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Basic Example</h2>
            <div className="bg-slate-900 rounded-xl p-4 mb-6 not-prose">
              <pre className="text-slate-300 text-sm">
                <code>{`import { Button, Badge } from '../components'

function App() {
  return (
    <div className="p-8">
      <Button variant="primary" size="lg">
        Get Started
      </Button>
      <Badge variant="success">New</Badge>
    </div>
  )
}`}</code>
              </pre>
            </div>
          </div>
        )

      case 'button':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Button</h1>
            <p className="text-xl text-slate-600 leading-8 mb-8">
              Buttons allow users to take actions, and make choices, with a single tap.
            </p>

            <DocsExample
              title="Basic button"
              description="The default button style"
              code={`<Button>Button</Button>`}
            >
              <Button>Button</Button>
            </DocsExample>

            <DocsExample
              title="Button variants"
              description="Use the variant prop to change the visual style of the Button."
              code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
            >
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </DocsExample>

            <DocsExample
              title="Button sizes"
              description="Use the size prop to change the size of the Button."
              code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
            >
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </DocsExample>
          </div>
        )

      case 'badge':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Badge</h1>
            <p className="text-xl text-slate-600 leading-8 mb-8">
              Badges are small status descriptors for UI elements.
            </p>

            <DocsExample
              title="Basic badge"
              description="The default badge style"
              code={`<Badge>Badge</Badge>`}
            >
              <Badge>Badge</Badge>
            </DocsExample>

            <DocsExample
              title="Badge variants"
              description="Use the variant prop to change the color of the Badge."
              code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
            >
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </DocsExample>
          </div>
        )

      case 'avatar':
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Avatar</h1>
            <p className="text-xl text-slate-600 leading-8 mb-8">
              An avatar is a graphical representation of a user.
            </p>

            <DocsExample
              title="Basic avatar"
              description="Avatar with image source"
              code={`<Avatar 
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
  alt="John Doe" 
/>`}
            >
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
                alt="John Doe" 
              />
            </DocsExample>

            <DocsExample
              title="Avatar with fallback"
              description="Avatar with fallback text when no image is provided"
              code={`<Avatar fallback="JD" />
<Avatar fallback="AB" />
<Avatar fallback="CD" />`}
            >
              <div className="flex gap-4">
                <Avatar fallback="JD" />
                <Avatar fallback="AB" />
                <Avatar fallback="CD" />
              </div>
            </DocsExample>

            <DocsExample
              title="Avatar sizes"
              description="Use the size prop to change the size of the Avatar."
              code={`<Avatar fallback="A" size="sm" />
<Avatar fallback="B" size="md" />
<Avatar fallback="C" size="lg" />
<Avatar fallback="D" size="xl" />`}
            >
              <div className="flex items-center gap-4">
                <Avatar fallback="A" size="sm" />
                <Avatar fallback="B" size="md" />
                <Avatar fallback="C" size="lg" />
                <Avatar fallback="D" size="xl" />
              </div>
            </DocsExample>
          </div>
        )

      default:
        return (
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Component Documentation</h1>
            <p className="text-xl text-slate-600">
              Select a component from the sidebar to view its documentation.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar
        sections={sidebarSections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="flex-1 overflow-hidden">
        <main className="h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
