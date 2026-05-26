# Creative Code 🚀

Welcome to the **Creative Code** repository. This is a premium, high-performance creative agency website designed to deliver highly immersive and buttery smooth digital experiences.

---

## ✨ Features & Visual Highlights

- **Dynamic Hero Section**: Interactive, beautifully animated selection drag system presenting the agency's primary capabilities. Highly responsive layout scaling perfectly on all device sizes.
- **Buttery-Smooth Page Transitions**: Custom GPU-accelerated page transitions driven by solid curtain sweeps and JavaScript timers to prevent stuck routes and frame rate drops.
- **Lag-Free Interaction Design**: Leverages hardware-accelerated transforms (`willChange: 'transform'`) and temporarily pauses the **Lenis** scroll engine during active animations to guarantee 60 FPS.
- **Fluid Navigation Drawer**: Fully responsive mobile drawer, styled with brand colors and loaded with unified social handles.
- **Modern Iconography**: Unified vector icons across all pages powered by `react-icons/fa6` (FontAwesome 6).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or above recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/creativo-code/creative-code.git
   cd creative-code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Spin up the local development server:
   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ⚙️ CI/CD Workflows

This project includes a **GitHub Actions** workflow (`.github/workflows/build.yml`) that triggers automatically on every `push` and `pull_request` targeting the `main` or `master` branches. It validates the code compilation by running:
- Node.js setup with automatic npm dependency caching.
- Clean dependency installation using `npm ci`.
- Production bundle verification using `npm run build`.
