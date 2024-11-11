![Logo](https://www.coolplanet.io/hs-fs/hubfs/Imported%20sitepage%20images/header-logo.png?width=1980&height=384&name=header-logo.png)

# CoolPlanet - Exercise - Backend part

This repository contains the backend part of the CoolPlanet exercise. Frontend part can be found [here](https://github.com/DmytroLukachyna/coolplanet-exercise-frontend).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Scripts](#scripts)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DmytroLukachyna/coolplanet-exercise-backend.git
   ```
2. Navigate into the project directory and install dependencies.

## Usage

1. Check that you have environment variables set up in a .env file (see [Environment Variables](#environment-variables) for required variables).
2. Start the server:

```bash
  npm run dev
```

3. Open a browser and navigate to http://localhost:8080 to view the app.

## Environment Variables

The application uses the following environment variables. Open a `.env` file in the root directory to configure them:

| Variable | Description                       | Default |
| -------- | --------------------------------- | ------- |
| `PORT`   | The port on which the server runs | `8080`  |

### Example .env File

```plaintext
PORT=8080
```

## API Reference

The API provides the following endpoints for managing user data:

| Method | Endpoint           | Description                                              | Parameters    |
| ------ | ------------------ | -------------------------------------------------------- | ------------- |
| GET    | `/api/getUsers`    | Retrieves a list of users with only first and last names | -             |
| GET    | `/api/getUser/:id` | Retrieves all data for a specific user by ID             | `id` (string) |

## Scripts

The following scripts are available for development and production tasks:

- **dev**: `npm run dev`
  - Starts the application in development mode with automatic reloading on file changes.
- **build**: `npm run build`
  - Creates a production-ready build by cleaning the `dist` directory, bundling files with `pkgroll`, and copying `users.json` to `dist/data`.
- **start**: `npm run start`
  - Runs the application from the `dist` directory for production.
- **format**: `npm run format`
  - Formats all JavaScript, TypeScript, and Markdown files in `src` using Prettier with the configuration specified in `.prettierrc`.
