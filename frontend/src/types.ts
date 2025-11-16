// This file will hold all our custom data types.
// It's a best practice for making TypeScript scalable.

export interface PaycheckData {
  // Pay Info
  grossPay: number;
  payFrequency: 'weekly' | 'bi-weekly' | 'semi-monthly' | 'monthly';
  
  // Tax Info
  filingStatus: 'single' | 'married';
  state: string; // We'll use this for state taxes later

  // W-4 Info (to be added later)
  // ...

  // Deductions
  trad401k: number;
  roth401k: number;
  hsa: number;
}