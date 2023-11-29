# Task Management Project

This project consists of two main folders:

1. **api**: Contains the NestJS backend for handling API requests and interacting with the PostgreSQL database.
2. **client**: Houses the Vite with React (TypeScript) frontend for the user interface and interaction with the API.

## API (NestJS)

### Setup

1. Navigate to the `api` folder: `cd api`.
2. Install dependencies: `npm install`.

3. Run the development server: `npm run start:dev`.



### API Documentation

Visit `http://localhost:3000` for Swagger documentation.

## Client (Vite with React and TypeScript)

### Setup

1. Navigate to the `client` folder: `cd client`.
2. Install dependencies: `npm install`.
3. Create a `tailwind.config.js` file at the root of the `client` folder:

    ```js
    // tailwind.config.js
    module.exports = {
      content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.html",
      ],
      // Add other Tailwind CSS configurations as needed
    }
    ```

4. Include Tailwind CSS in your styles. For example, in `src/styles/index.css`:

    ```css
    /* src/styles/index.css */
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
    /* Add your custom styles below */
    ```

5. Run the development server: `npm run dev`.

### Project Structure

- `src`: Contains the source code for the React application.
- `src/components`: Reusable React components.
- `src/pages`: Components representing different pages.
- `src/services`: API communication and data fetching.

- ...

### Accessing the Application

Visit `http://127.0.0.1:5173/` to access the client application.

### Additional Configuration

- Ensure that the client's API endpoint in `src/services/[...].ts` matches the actual API URL.

---

 git init
  git add *
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/roone858/Task-Management-Project.git
  git push -u origin main