# Batch File Setup Configurer

A web-based utility designed to quickly generate Windows batch (`.bat`) scripts for automating project environment setups. 

This tool helps developers streamline the process of initializing projects, installing dependencies, and configuring tools across various package managers.

## Link

[App link](https://vercel.com/frkhor-8728s-projects/project-setup-tool)

## Features

- **Multi-Package Manager Support**: Seamlessly generate commands for:
  - `npm` (TypeScript/JavaScript)
  - `pip` (Python)
  - `dotnet` (.NET)
  - `go` (Go)
  - `vcpkg` (C/C++)
  - `gem` (Ruby)
  - `composer` (PHP)
  - `cargo` (Rust)
- **Dynamic Dependency Management**: Easily add, edit, or remove packages with specific version requirements.
- **Instant Script Generation**: Configure your setup and download the resulting `.bat` file with a single click.
- **User-Friendly Interface**: Built with a clean, responsive UI using React and Tailwind CSS.

## Getting Started

To run the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd batSetup/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to the local development URL provided by Vite (e.g., `http://localhost:5173`).

## Usage

1. **File Name**: Enter the desired name for your `.bat` file (e.g., `setup.bat`).
2. **Select Manager**: Choose your preferred package manager from the dropdown.
3. **Add Packages**: Use the "Add new package" button to include dependencies for your project.
4. **Configure**: Add, edit, or delete packages as needed.
5. **Download**: Click "Create file" to generate and download your custom installation script.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for any improvements or features.
