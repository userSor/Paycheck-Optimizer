# Paycheck-Optimizer

A financial modeling tool that provides paycheck optimizations, going beyond simple withholding calculators.

This project is designed to help users understand exactly where their money is going and how to use their payroll deductions to meet long-term financial goals

### Key Features
- High-Fidelity Tax Modeling: Accurately calculates FICA (Social Security, Medicare), Federal, State, and Local (e.g., NYC, Yonkers) income tax withholding. This is designed to match the accuracy of tools like smartasset.com's paycheck calculator.

- Comprehensive Deductions: Models pre-tax deductions (Traditional 401k, HSA, FSA, transit) and post-tax deductions (Roth 401k, insurance premiums).

- W-4 & Withholding Simulator: Calculates how changing your W-4 allowances, dependents, or extra withholding will affect your paycheck and end-of-year tax bill.

- W-4 Withholding Recommendations: Actively calculates the optimal W-4 settings (including step 4c extra withholding) to get you closest to a $0 tax refund, factoring in estimated income from investments and savings interest.

- Traditional vs. Roth Analyzer: A module to compare the long-term tax advantages of Traditional (tax-deferred) vs. Roth (tax-free growth) contributions based on your current and expected future tax brackets.

- "Optimization Engine" (AI / ML):

  - Basic: Recommends the optimal contribution split (e.g., 401k vs. HSA vs. Student Loan) based on a user's stated goal (e.g., "Pay off debt," "Max retirement," "Lower tax bill").

  - Stretch Goal: Use ML/AI to provide personalized financial advice based on user goals and risk tolerance.

### Tech Stack
Frontend: React.js and Tailwind CSS
AI/ML and Backend: Puter
Deployment: Github Pages
