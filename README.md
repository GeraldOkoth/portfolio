# Gerald Okoth — Developer Portfolio

A personal developer portfolio showcasing my projects, technical skills, services, experience, and journey as a Front-End Developer, UI/UX designer and Graphic designer.

The portfolio is built with React and Vite, with an emphasis on responsive design, accessibility, performance, maintainability, and a clean user experience.

## Live Portfolio

🌐 **Portfolio:** https://geraldokoth.vercel.app/

## About the Project

This portfolio serves as a central place to present my work and demonstrate my growth as a Front-End Developer.

It includes:

- A personal introduction and professional profile
- Technical skills and technologies
- Featured projects and project details
- Services I offer
- Contact information
- Social media and professional links
- Responsive layouts for different screen sizes
- Interactive UI elements and animations

The project has also undergone a number of technical improvements, including migration from Create React App to Vite, dependency cleanup, code splitting, lazy loading, and image optimization.

---

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router
- React Icons

### UI & Animation

- Framer Motion
- Responsive CSS
- CSS Flexbox
- CSS Grid

### Build & Development

- Vite
- npm
- ESLint
- Git
- GitHub

### Deployment & Analytics

- Vercel
- Vercel Analytics

---

## Key Features

### Responsive Design

The portfolio is designed to provide a consistent experience across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

### Component-Based Architecture

The application is organized into reusable React components and page-level sections to improve maintainability and scalability.

### Interactive UI

Interactive elements include:

- Navigation controls
- Project cards
- Project modals
- Theme controls
- Animated UI elements
- Interactive buttons and links

### Project Showcase

Projects are presented with:

- Project descriptions
- Technologies used
- Screenshots
- Links to live demonstrations where available
- Links to source code where available

### Performance Optimization

The portfolio has undergone several performance-focused improvements, including:

- Migration from Create React App to Vite
- Removal of unnecessary dependencies
- Route/component lazy loading
- Code splitting
- Image optimization
- Production build optimization
- Analysis of JavaScript bundle sizes
- Lighthouse performance auditing
- Google PageSpeed Insights auditing

Further performance improvements and optimization work are planned as part of the project's ongoing development.

---

## Project Structure

A simplified view of the project structure:

```text
portfolio/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── footer/
│   │   └── header/
│   │
│   ├── pages/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── project/
│   │   ├── services/
│   │   ├── skills/
│   │   
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Before running the project locally, make sure you have:

+ [Node.js](https://nodejs.org) installed
+ npm (included with Node.js)
+ A code editor such as [Visual Studio Code](https://code.visualstudio.com)
+ Git

This project uses Vite 8, which requires Node.js 20.19+ or 22.12+.<br />
You can check your installed versions with:

```
node --version
npm --version
```

## Installation

1. Clone the repository<br />
git clone https://github.com/GeraldOkoth/portfolio.git

2. Navigate into the project directory<br />
`cd portfolio`

3. Install dependencies<br />
`npm install`

__Running the Development Server__

Start the Vite development server with:<br />
`npm run dev`

Vite will provide a local development URL, normally:<br />
`http://localhost:5173/`

**Create a production build**

`npm run build`

**Creates an optimized production build in the `dist/` directory.**<br />
Preview the production build<br />
`npm run preview`

## Deployment

The portfolio is deployed using Vercel.

The production build uses Vite's `dist/` output directory.

For a Vite deployment, the relevant configuration is:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

## Troubleshooting
If you encounter issues:

Make sure your Node.js version is compatible

Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

Clear the cache: `npm cache clean --force`

## Contact

I am open to opportunities, collaboration, mentorship, feedback, and conversations around Front-End Development, UI/UX and Software Engineering.

* Email: okothgerald449@gmail.com
* LinkedIn: https://linkedin.com/in/geraldokoth
* X / Twitter: https://x.com/gerald_okothKE