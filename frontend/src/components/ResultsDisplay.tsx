import React from 'react';
import type { PaycheckData } from '../types';

// Define the props, just like in the form
interface ResultsDisplayProps {
  formData: PaycheckData;
}

// A reusable row for our results
const ResultRow: React.FC<{ label: string; value: string; isBold?: boolean; isTotal?: boolean; color?: string }> = 
  ({ label, value, isBold = false, isTotal = false, color = 'text-gray-100' }) => (
  
  <div className={`flex justify-between py-2 ${isTotal ? 'border-t border-gray-600 mt-2' : 'border-b border-gray-700'}`}>
    <span className={`text-sm ${isBold ? 'font-semibold' : 'text-gray-300'}`}>{label}:</span>
    <span className={`text-sm ${isBold ? 'font-semibold' : ''} ${color}`}>{value}</span>
  </div>
);


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ formData }) => {
  
  // --- THIS IS WHERE YOUR TAX ENGINE WILL GO ---
  // For now, we'll just show placeholder values.
  
  // Placeholder calculations
  const grossPay = formData.grossPay;
  const preTaxDeductions = formData.trad401k + formData.hsa;
  const taxableIncome = grossPay - preTaxDeductions;
  // ... more calculations will go here
  const postTaxDeductions = formData.roth401k;
  const takeHomePay = taxableIncome - 0 - postTaxDeductions; // Placeholder for taxes
  

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-white mb-4">Paycheck Breakdown</h2>
      
      <div className="space-y-1">
        <ResultRow label="Gross Pay" value={`$${grossPay.toFixed(2)}`} isBold={true} />
        <ResultRow label="Traditional 401k" value={`-$${formData.trad401k.toFixed(2)}`} />
        <ResultRow label="HSA" value={`-$${formData.hsa.toFixed(2)}`} />
        
        <ResultRow 
          label="Taxable Income (for Withholding)" 
          value={`$${taxableIncome.toFixed(2)}`} 
          isBold={true} 
        />
        
        {/* Placeholder for taxes */}
        <ResultRow label="FICA (Social Security, Medicare)" value="-$0.00" color="text-red-400" />
        <ResultRow label="Federal Withholding" value="-$0.00" color="text-red-400" />
        <ResultRow label="State Withholding" value="-$0.00" color="text-red-400" />
        
        <ResultRow label="Roth 401k" value={`-$${formData.roth401k.toFixed(2)}`} />
        
        {/* Total */}
        <ResultRow 
          label="Take-Home Pay (per check)" 
          value={`$${takeHomePay.toFixed(2)}`} 
          isTotal={true} 
          isBold={true} 
          color="text-green-400" 
        />
      </div>

      {/* This is a debug view so you can see your state object change in real-time.
          It's SUPER useful. We can remove it later. */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-400">Debug: Live Form Data</h3>
        <pre className="p-4 bg-gray-900 text-green-300 rounded-md overflow-x-auto text-xs mt-2">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ResultsDisplay;