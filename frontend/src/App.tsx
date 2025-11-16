import { useState } from 'react';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import type { PaycheckData } from './types'; // Import our new type!

function App() {
  
  // This is our single source of truth for all form data.
  // We type it with our new PaycheckData interface.
  const [formData, setFormData] = useState<PaycheckData>({
    grossPay: 5000,
    payFrequency: 'bi-weekly',
    filingStatus: 'single',
    state: 'GA', // Default to Georgia :)
    trad401k: 0,
    roth401k: 0,
    hsa: 0,
  });

  return (
    // Set a dark theme for the whole app
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Paycheck Optimizer</h1>
          <p className="text-lg text-gray-400">Model your deductions and optimize your take-home pay.</p>
        </div>

        {/* This is our main layout.
          - On small screens (mobile), it's 1 column.
          - On medium screens and up (md:), it's a 2-column grid.
        */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Column 1: The Form (takes 2/5 width on desktop) */}
          <div className="md:col-span-2">
            <InputForm formData={formData} setFormData={setFormData} />
          </div>

          {/* Column 2: The Results (takes 3/5 width on desktop) */}
          <div className="md:col-span-3">
            <ResultsDisplay formData={formData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;