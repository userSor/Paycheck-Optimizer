import React from 'react';
// We use 'React.FC' (Functional Component) for basic components
// that don't need to manage their own state.

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-400">ProForma</h1>
          </div>
          <div className="flex items-center">
            {/* We can add links here later */}
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Simulator</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;