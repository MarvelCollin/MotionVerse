# MotionVerse Component Library

A comprehensive React component library built with TypeScript and Tailwind CSS.

## 📁 Folder Structure

```
src/components/
├── ui/                     # Basic UI components
│   ├── Button.tsx         # Button with variants and sizes
│   ├── Badge.tsx          # Status indicators and labels
│   ├── Avatar.tsx         # User profile pictures
│   ├── Progress.tsx       # Progress bars and indicators
│   └── index.ts           # UI components exports
│
├── layout/                # Layout and container components
│   ├── Card.tsx           # Card with header and content
│   ├── Container.tsx      # Responsive containers
│   ├── Grid.tsx           # Grid system
│   └── index.ts           # Layout components exports
│
├── forms/                 # Form input components
│   ├── Input.tsx          # Text inputs with validation
│   ├── Select.tsx         # Dropdown selects
│   ├── Checkbox.tsx       # Checkbox inputs
│   └── index.ts           # Form components exports
│
├── feedback/              # User feedback components
│   ├── Alert.tsx          # Alert messages
│   ├── Spinner.tsx        # Loading indicators
│   └── index.ts           # Feedback components exports
│
├── navigation/            # Navigation components
│   ├── Navbar.tsx         # Navigation bars
│   ├── Tabs.tsx           # Tabbed interfaces
│   └── index.ts           # Navigation components exports
│
└── index.ts               # Main exports file
```

## 🚀 Usage

Import components from the main index:
```tsx
import { Button, Badge, Card, Input } from '../components'
```

Or import from specific categories:
```tsx
import { Button, Badge } from '../components/ui'
import { Card, Container } from '../components/layout'
import { Input, Select } from '../components/forms'
```

## 📚 Documentation

Visit `/docs` to see all components with live examples and code snippets.

## 🎨 Features

- **12+ Components** across 5 categories
- **TypeScript** support with full type definitions
- **Tailwind CSS** for styling
- **Responsive** design out of the box
- **Consistent API** across all components
- **Accessible** following ARIA guidelines
- **Tree-shakable** imports for optimal bundle size

## 🔧 Component Categories

### UI Components
Basic interface elements like buttons, badges, avatars, and progress indicators.

### Layout Components  
Structural components for organizing content including cards, containers, and grids.

### Form Components
Input elements for user interaction including text inputs, selects, and checkboxes.

### Feedback Components
Components for user feedback like alerts, loading spinners, and notifications.

### Navigation Components
Components for site navigation including navbars, tabs, and breadcrumbs.

## 📦 Installation

Components are designed to work with:
- React 18+
- TypeScript 5+
- Tailwind CSS 3+

Make sure these dependencies are installed in your project.
