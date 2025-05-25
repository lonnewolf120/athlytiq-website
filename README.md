# FitNation Website

This is a Next.js project for the FitNation website. Follow the steps below to set up and run the project locally.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [pnpm](https://pnpm.io/) (used as the package manager)

## Getting Started

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   cd Website
   ```
2. **Install Dependencies**

Use `pnpm` to install the required dependencies: `pnpm install`

3. **Run the Development Server**

Start the development server:  `pnpm dev`

The application will be available at http://localhost:3000.

## Building for Production
To build the project for production:

1. Build the Application: `pnpm build`

Run the following command to create an optimized production build:

2. Start the Production Server

Start the production server: `pnpm start`

The application will be available at http://localhost:3000.

## Additional Scripts

**Lint the Code**: `pnpm lint`

Run the linter to check for code quality issues:

**Deploy to GitHub Pages**: `pnpm deploy:gh`

To deploy the project to GitHub Pages, use the following command:

## Configuration
The project configuration is managed in the following files:
   
    next.config.mjs: Next.js configuration

    tailwind.config.ts: Tailwind CSS configuration
    
    tsconfig.json: TypeScript configuration
