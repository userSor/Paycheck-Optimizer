import React from 'react';
import type { PaycheckData } from '../types'; // Import our data type

// Define the types for the props this component will receive.
// This is a key part of TypeScript with React.
interface InputFormProps {
  formData: PaycheckData;
  setFormData: React.Dispatch<React.SetStateAction<PaycheckData>>;
}

// Reusable components for our form to keep it DRY
interface FormInputProps {
  label: string;
  id: keyof PaycheckData; // This is a powerful TS feature!
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <div className="mt-1">
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        min={0}
        className="block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
      />
    </div>
  </div>
);

// Our main form component
const InputForm: React.FC<InputFormProps> = ({ formData, setFormData }) => {
  
  // A single handler for all input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <form className="space-y-6 p-6 bg-gray-800 rounded-lg shadow-xl">
      
      {/* --- Section 1: Pay Info --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">Pay & Tax Info</h3>
        <FormInput label="Gross Pay (per check)" id="grossPay" value={formData.grossPay} onChange={handleChange} />
        
        <div>
          <label htmlFor="payFrequency" className="block text-sm font-medium text-gray-300">
            Pay Frequency
          </label>
          <select
            id="payFrequency"
            name="payFrequency"
            value={formData.payFrequency}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <option value="weekly">Weekly (52/yr)</option>
            <option value="bi-weekly">Bi-Weekly (26/yr)</option>
            <option value="semi-monthly">Semi-Monthly (24/yr)</option>
            <option value="monthly">Monthly (12/yr)</option>
          </select>
        </div>

        <div>
          <label htmlFor="filingStatus" className="block text-sm font-medium text-gray-300">
            Filing Status
          </label>
          <select
            id="filingStatus"
            name="filingStatus"
            value={formData.filingStatus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>
      </div>

      {/* --- Section 2: Deductions --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">Deductions (per check)</h3>
        <FormInput label="Traditional 401k" id="trad401k" value={formData.trad401k} onChange={handleChange} />
        <FormInput label="Roth 401k" id="roth401k" value={formData.roth401k} onChange={handleChange} />
        <FormInput label="HSA (Health Savings Account)" id="hsa" value={formData.hsa} onChange={handleChange} />
      </div>

    </form>
  );
};

export default InputForm;