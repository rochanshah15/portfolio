# Shah Rochan - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern glassmorphism design with dark/light mode
- Responsive layout optimized for all devices
- Smooth animations and transitions
- Contact form with EmailJS integration
- Project showcase with GitHub links
- Skills section with progress animations

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **EmailJS** - Contact form functionality
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bright-byte-display
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Deploy using Firebase CLI

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── ThemeToggle.tsx # Dark/light mode toggle
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## Contact

For any questions or feedback, please reach out through the contact form on the website.

---

Built with ❤️ by Shah Rochan
