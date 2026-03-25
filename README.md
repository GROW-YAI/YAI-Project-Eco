# Ike-Dian Fashion - Sustainable Fashion E-Commerce Website

## Project Overview

Ike-Dian Fashion is a sustainable fashion e-commerce website that revolutionizes the fashion industry by transforming environmental challenges into beautiful, durable fashion items. The website showcases how plastic waste and worn-out textiles are collected and given new life as stylish backpacks, tote bags, bedsheets, and home accessories.

### What the Site Does

- **Showcases Sustainable Products**: Displays a curated collection of fashion items made from recycled materials
- **Tells the Transformation Story**: Features an innovator profile section that explains the vision and mission behind sustainable fashion
- **Product Gallery**: Visual gallery showcasing the range of sustainable products
- **Customer Testimonials**: Features feedback from customers who support sustainable fashion
- **Contact Information**: Provides ways for customers and partners to get in touch

### Main Features

1. **Image Slider**: Dynamic hero section with engaging visuals
2. **About Section**: Detailed explanation of the sustainability mission with animated puzzle-style images
3. **Innovator Profile**: Personal story of the founder and their vision
4. **Products Showcase**: Display of sustainable fashion items
5. **Testimonials**: Customer reviews and feedback
6. **Gallery**: Visual collection of products and process
7. **Contact Form**: Easy way to reach out (powered by EmailJS)
8. **Boafo Accessibility Widget**: Makes the site accessible to all users

### Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Layout**: React Masonry CSS
- **Email Service**: EmailJS
- **Accessibility**: Boafo Accessibility Widget
- **Language**: JavaScript (JSX)

### Accessibility

This website uses the **Boafo Accessibility Widget** to ensure the site is accessible to all users, including those with disabilities. The widget provides features like:
- Screen reader support
- Keyboard navigation
- High contrast modes
- Font size adjustments
- And more accessibility options

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Navigate to the API Keys section
5. Generate a new API key
6. Copy the API key for use in your project

**Important**: Keep your API key secure and never commit it directly to version control.

---

## How to Integrate the Boafo Widget

### Step 1: Install the Package

```bash
npm install boafo-accessibility-widget
```

### Step 2: Create a Client Component

Create a file at `app/components/BoafoWidgetInitializer.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    } else {
      console.warn("Boafo API key not found. Please set NEXT_PUBLIC_BOAFO_API_KEY in your .env file.");
    }
  }, []);

  return null;
}
```

### Step 3: Import and Use in Layout

Import and use `BoafoWidgetInitializer` inside `app/layout.tsx`:

```tsx
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BoafoWidgetInitializer />
      </body>
    </html>
  );
}
```

### Step 4: TypeScript Support

Create `src/types/global.d.ts` with the module declaration:

```typescript
declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BOAFO_API_KEY: string;
    VITE_BOAFO_API_KEY: string;
  }
}
```

Update `tsconfig.json` to include `src/types`:

```json
{
  "include": ["**/*.ts", "**/*.tsx", "src/types"]
}
```

### Step 5: Static HTML Integration

For static HTML files, add the Boafo script tag using `data-api-key`:

```html
<!-- For development: Replace BOAFO_API_KEY with your actual API key from .env file -->
<!-- For production: Use build-time environment variable injection -->
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="BOAFO_API_KEY"
  defer
></script>
```

---

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/GROW-YAI/YAI-Project-Eco.git
cd YAI-Project-Eco
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Copy the example environment file:

```bash
cp .env.example .env
```

4. **Add Your API Key**

Open the `.env` file and replace the placeholder with your actual Boafo API key:

```env
NEXT_PUBLIC_BOAFO_API_KEY=your_actual_boafo_api_key_here
VITE_BOAFO_API_KEY=your_actual_boafo_api_key_here
```

5. **Run the Development Server**

```bash
npm run dev
```

6. **Open in Browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── BoafoWidgetInitializer.tsx
│   │   └── features/
│   │       ├── navbar.tsx
│   │       └── footer.tsx
│   ├── globals.css
│   └── layout.tsx
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── InnovatorProfile.jsx
│   │   ├── Layout.jsx
│   │   ├── Products.jsx
│   │   └── TestimonialsSection.jsx
│   ├── images/
│   ├── pages/
│   │   └── Home.jsx
│   ├── types/
│   │   └── global.d.ts
│   ├── App.jsx
│   ├── ImageSlider.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── public/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BOAFO_API_KEY` | Boafo API key for Next.js applications | Yes |
| `VITE_BOAFO_API_KEY` | Boafo API key for Vite applications | Yes |

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is private and proprietary.

---

## Contact

For questions or inquiries, please reach out through the contact form on the website.

---

## Acknowledgments

- [Boafo](https://boafo.co) for providing the accessibility widget
- [React](https://react.dev/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations