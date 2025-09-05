
# Portfolio G Site

This is a personal portfolio website built using **React** and **Vite**. It showcases projects, skills, and experiences, and includes features like GitHub project integration, downloadable CVs, and responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Responsive Design**: Optimized for all screen sizes.
- **GitHub Integration**: Automatically fetches and displays GitHub repositories.
- **Downloadable CVs**: Allows users to download CVs in multiple languages.
- **Dynamic Stats**: Tracks and displays website visit counts.
- **Maintenance Mode**: Displays a maintenance message when enabled.
- **Modern UI**: Built with TailwindCSS for a sleek and modern look.

---

## Technologies Used

- **React**: Frontend framework.
- **Vite**: Build tool for fast development.
- **TailwindCSS**: Utility-first CSS framework.
- **Framer Motion**: For animations.
- **React Icons**: For scalable vector icons.
- **GitHub API**: To fetch and display repositories.

---

## Project Structure

```
Portfolio_G_Site_2025/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # React components
│   │   ├── AboutMe/       # About Me section components
│   │   ├── Navbar/        # Navbar component
│   │   ├── Technologies/  # Technologies section components
│   ├── constants/         # Static data and configurations
│   ├── fonts/             # Custom fonts
│   ├── styles/            # TailwindCSS and custom styles
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Giinsho/portfolio_G_site.git
   cd portfolio_G_site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code issues.
- **`npm run deploy`**: Deploys the project to GitHub Pages.

---

## Deployment

This project is configured to deploy to **GitHub Pages**. To deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The website will be available at:  
[https://Giinsho.github.io/portfolio_G_site/](https://Giinsho.github.io/Portfolio_G_site/)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
