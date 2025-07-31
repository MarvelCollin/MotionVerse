import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">MotionVerse</h1>
        <p className="text-gray-600 mb-8">React + TypeScript + Tailwind CSS</p>
        
        <div className="space-y-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
          
          <p className="text-sm text-gray-500">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
