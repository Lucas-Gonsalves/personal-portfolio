# Personal Portfolio

A responsive portfolio website built with **React + TypeScript** to present projects, services, skills, and contact information in a clean single-page experience.

> **Note:** The portfolio content is currently written in Portuguese (pt-BR).

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment Build](#deployment-build)
- [Contributing](#contributing)

## Overview

This project includes:

- Intro/presentation section
- Services section
- Recent work/projects section with filters
- Skills section
- Contact form with validation, reCAPTCHA, and EmailJS integration
- Smooth UI interactions and custom styled components

Repository: [Lucas-Gonsalves/personal-portfolio](https://github.com/Lucas-Gonsalves/personal-portfolio)

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite 5**
- **styled-components**
- **react-hook-form + zod**
- **EmailJS Browser SDK**
- **Google reCAPTCHA**

## Project Structure

```text
personal-portfolio/
├── README.md
└── web/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── routes/
    │   └── styles/
    ├── package.json
    └── vite.config.ts
```

## Prerequisites

- **Node.js** 18+ (recommended)
- **npm** 9+ (recommended)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Lucas-Gonsalves/personal-portfolio.git
   ```

2. Enter the web app folder:

   ```bash
   cd personal-portfolio/web
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

Create a `.env` file inside `web/` with the variables below:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

Without these values, the contact form can render but email submission/reCAPTCHA validation will not work correctly.

## Available Scripts

From the `web/` directory:

- `npm run dev` — Start Vite in development mode
- `npm run build` — Type-check and generate a production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Deployment Build

To produce an optimized build:

```bash
cd web
npm run build
```

The output is generated in `web/dist/`.

## Contributing

Contributions are welcome.

1. Fork this repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## Author

**Lucas Gonçalves da Luz**

If this project helped you, consider leaving a ⭐ on GitHub.
