import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              HDRI - Human Development & Research Institute
            </h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Welcome to HDRI
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A non-profit NGO founded in Kolkata in 1985, focusing on youth development, 
            substance abuse intervention, and community health programs.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App