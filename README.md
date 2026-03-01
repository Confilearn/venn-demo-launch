# Venn Demo Launch

A modern, responsive landing page for Venn - a demo product for venn.ca. Built with React, TypeScript, and Tailwind CSS using the shadcn/ui component library.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Beautiful UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Component Library**: Extensive collection of pre-built UI components
- **Developer Experience**: ESLint, TypeScript, and hot reload development
- **Testing**: Vitest with React Testing Library setup

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components

- **shadcn/ui** - Comprehensive component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management

### Additional Libraries

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management with Zod validation
- **TanStack Query** - Data fetching and state management
- **Recharts** - Chart library
- **Sonner** - Toast notifications

### Development Tools

- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd venn-demo-launch
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation bar
│   ├── HeroSection.tsx # Landing hero
│   ├── FeaturesSection.tsx # Features showcase
│   └── Footer.tsx      # Page footer
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── main.tsx            # App entry point
└── App.tsx             # Main app component
```

## 🎨 UI Components

This project includes a comprehensive set of shadcn/ui components:

- **Forms**: Input, Select, Checkbox, Radio, Switch, Slider
- **Layout**: Card, Accordion, Tabs, Separator, ScrollArea
- **Navigation**: Navigation Menu, Dropdown Menu, Breadcrumb
- **Feedback**: Alert, Dialog, Toast, Progress, Skeleton
- **Data Display**: Table, Badge, Avatar, Chart
- **And many more...**

## 🚀 Getting Started

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:8080`

3. Start building! The project includes hot reload, so changes will be reflected immediately.

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode for development:

```bash
npm run test:watch
```

## 📝 Code Quality

This project uses ESLint for code quality and consistency. Run the linter:

```bash
npm run lint
```

## 🌟 Deployment

Build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment.

Built with ❤️ using modern web technologies
