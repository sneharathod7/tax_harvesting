# KoinX Tax-Loss Harvesting Planner

An elegant, highly interactive tax planner dashboard designed to help users identify and harvest tax-loss opportunities in their cryptocurrency holdings. Users can instantly compare their realized capital gains before and after harvesting selected losses.

🚀 **Live Production Link:** [https://tax-harvesting-app-cyan.vercel.app](https://tax-harvesting-app-cyan.vercel.app)

---

## Key Features

- **Interactive Asset Selection**: Choose specific crypto holdings (e.g., Ethereum, Solana, BNB, USDC) to see their direct tax impact.
- **Dynamic Row Highlighting**:
  - In **Dark Mode**, selected rows gain a beautiful, semi-transparent blue backdrop (`bg-blue-950/40`), glowing cyan-blue borders, and a micro-interactive hover state.
  - In **Light Mode**, selected rows are highlighted with a premium soft blue tint (`bg-blue-50/70`) with subtle borders and shadows.
- **Real-Time Tax Comparison**:
  - **Pre-Harvesting**: View current realized short-term and long-term gains/losses.
  - **After-Harvesting**: Get instant, projected short-term and long-term gains/losses along with a bright blue card summarizing the estimated tax savings!
- **Dynamic Sorting**: Sort holdings by Short-Term or Long-Term gains with instant asc/desc visual updates.
- **Theme Support**: Seamlessly toggle between Light and Dark mode themes.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with horizontal table scrolling for smaller devices.

---

## Technology Stack

- **Core Framework**: React 18.x
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & Vanilla CSS
- **Icons**: Lucide React
- **Hosting**: Vercel

---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sneharathod7/tax_harvesting.git
   cd tax_harvesting
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server locally:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to see the live app.

4. Create a production build:
   ```bash
   npm run build
   ```

---

## Deployment to Vercel

This project is configured for automated builds on Vercel:
- **Build Command:** `vite build`
- **Output Directory:** `dist`

To deploy updates manually, install Vercel CLI and run:
```bash
vercel --prod
```

---

## License

This project is created for demonstration and planning purposes. Refer to your tax advisor before executing any harvesting actions.
