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

### Tech Stack

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

This website integrates the **Boafo Accessibility Widget** to ensure the site is accessible to all users, including those with disabilities. The widget provides features like screen reader support, keyboard navigation, high contrast modes, font size adjustments, and more accessibility options.

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Navigate to the API Keys section
5. Generate a new API key
6. Copy the API key for use in your project

---

## Boafo Widget Integration Guide

For detailed integration instructions, refer to the official guide:
[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/YAI-Project-Eco.git
   cd YAI-Project-Eco
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure your Boafo API key**
   - Open the `.env` file
   - Replace `YOUR_BOAFO_API_KEY_HERE` with your actual API key from boafo.co

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Verify the widget loads**
   - Open your browser to the URL shown in the terminal (typically http://localhost:5173)
   - Confirm that the Boafo Accessibility Widget appears on the site