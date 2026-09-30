# NSS Website

The NSS Website is an in-development web project for a National Service Scheme unit. It currently contains a static multi-page frontend and an Express/MySQL backend with an initial user registration API.

## Project Structure

```text
NSS_WEBSITE/
|-- Backend/       Express API, MySQL connection, and user registration
|-- Frontend/      Static HTML pages, stylesheets, and browser scripts
|-- images.html/   Image assets used by the project
```

The frontend includes pages for information about NSS, services, events, achievements, contact, volunteer applications, contributions, and login/registration screens. Some pages and interactions are still under development.

## Requirements

- Node.js and npm
- MySQL Server
- A static web server for the frontend, such as the VS Code Live Server extension

## Run Locally

### Backend

1. Create a MySQL database named `nss_website`.
2. Configure the connection in `Backend/config1/database.js`. The current development defaults are `localhost:3306`, user `root`, and password `root`.
3. Create the `users` and `student_profiles` tables expected by the registration endpoint. A schema or migration script is not currently included in the repository.
4. Install dependencies and start the API:

   ```powershell
   cd Backend
   npm install
   npm run dev
   ```

   The API listens on `http://localhost:3000` by default. `npm start` runs the same server without nodemon.

### Frontend

Open the `Frontend` folder with a static web server, or open an HTML page directly in a browser for basic layout review. The frontend does not currently have a package manifest or build step.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Returns a backend welcome message. |
| `GET` | `/api/users/test` | Confirms the user API route is responding. |
| `POST` | `/api/users/register` | Creates a user and student profile. |

The registration endpoint expects JSON with these fields:

```json
{
  "full_name": "Example Student",
  "email": "student@example.com",
  "password": "development-password",
  "role": "student",
  "registration_number": "REG123",
  "college_name": "Example College",
  "year_section": "2nd Year",
  "branch": "Computer Science",
  "blood_group": "O+",
  "blood_donor": true,
  "interests": "Community outreach",
  "skills": "Organization",
  "motivation": "I want to volunteer.",
  "previous_volunteer": false,
  "weekend_available": true,
  "declaration": true
}
```

Passwords are hashed with bcrypt before insertion. The registration request requires the MySQL tables and columns used in `Backend/controllers/userController.js` to exist.

## Development Notes

- This is an active development project; frontend and backend functionality may be incomplete.
- MySQL connection values are currently hardcoded in `Backend/config1/database.js`. Although `.env` files are ignored by Git, the current backend does not read database settings from environment variables.
- The repository does not currently include a database schema/migration, automated tests, or a frontend build/test setup.
- The backend has a development script (`npm run dev`) using nodemon.

## Contributing

Work on a focused change, test the affected page or API locally, and avoid committing credentials or local environment files. Update this README as project setup or functionality changes.