# Workflow Documentation for My Portfolio Website

## Introduction
Welcome to the private documentation of the workflow for managing my personal portfolio website. This document outlines the commands and steps necessary to run, build, deploy, and manage the source code of the website efficiently.

## Workflow on the `main` Branch

### Development and Deployment:
1. **Start Development Server:**
Use this command to run the project on a local browser for development.
- $ npm run dev


2. **Build the Project:**
- $ npm run predeploy
Compiles the source code into production-ready files located in the `dist` directory.

3. **Deploy to GitHub Pages:**
- $ npm run deploy
This command pushes the contents of the `dist` directory to the `gh-pages` branch.

4. **Add Changes:**
- $ git add .

5. **Commit Changes:**
- $ git commit -m "commit message"

6. **Push Changes:**
- $ git push origin main

Ensure to push your changes to keep the remote repository up-to-date.

### Important Note:
- **Always update the following files together to ensure consistency across your application:**

This is where you can update your experience and projects. 
- src/constants/index.js
- src/constants/constants.js

To update the images you need and export them:
- Upload them in src/assets/
- Export their names in src/assets/index.js


## Workflow on the `gh-pages` Branch

### Manual Updates (If Required):
1. **Switch to gh-pages Branch:**
- $ git checkout gh-pages

2. **Add Changes:**
- $ git add .

3. **Commit Changes:**
- $ git commit -m "Manually updating gh-pages"

4. **Push Changes:**
- $ git push origin gh-pages

## Conclusion
This document serves as a guide to manage the deployment and maintenance of the portfolio website. Ensure to follow the steps accurately to maintain the integrity and performance of the website.

