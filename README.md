# My Portfolio Website

Welcome to the GitHub repository for my personal portfolio website, which showcases my projects, skills, and experiences in the field of software engineering. This website serves as a professional platform to connect with peers and potential employers.

## Overview

This portfolio is designed to provide a comprehensive overview of my technical skills, project experiences, and professional journey. It includes sections for projects, about me, contact information, and my resume. The site is built with modern web technologies and is fully responsive, ensuring a smooth user experience on any device.

## Technologies Used

- **HTML/CSS**: For structuring and styling the website.
- **JavaScript**: For dynamic interactions.
- **Tailwind CSS**: A utility-first CSS framework that speeds up the development process.
- **Vite**: A modern frontend build tool that provides a faster and more efficient development experience.
- **Node.js**: Used for package management and build processes.

## Project Structure

- **/build**: Contains compiled and minified assets ready for deployment.
- **/dist**: Output directory for builds produced by Vite.
- **/node_modules**: Contains all the project's npm dependencies.
- **/public**: Static files like images and fonts used in the project.
- **/src**: Source files for the application, including scripts, styles, and HTML.
- **index.html**: The entry point of the website.
- **package.json & package-lock.json**: NPM configuration files listing project dependencies.
- **.eslintrc.cjs, postcss.config.cjs, tailwind.config.cjs, vite.config.js**: Configuration files for ESLint, PostCSS, TailwindCSS, and Vite respectively.

## Updating Experience

Work experience is defined in [src/index.js](./src/index.js), with the newest roles first. Keep dates as month/year ranges rather than relative durations. The introductions in [Hero.jsx](./src/components/Hero.jsx) and [About.jsx](./src/components/About.jsx) should reflect the current role.

Run `npm ci` to restore dependencies, then `npm run build` to verify changes. `npm run deploy` builds and publishes `dist/` to the `gh-pages` branch used by the portfolio's GitHub Pages site.
