# Frontend Take-Home Assignment

## How to run Project Locally

1. Clone the repo
2. Run the following commands in the `/server` directory:
   ```
   npm i
   npm run api
   ```
3. Run the following commands in the `/client` directory:
   ```
   npm i
   npm run dev
   ```
4. Navigate to `http://localhost:4000`

## Potential Improvements

#### React Context for State Management

Create context for the roles table, similar to what I created for the users table. This would enable adding more features to the roles table.

#### Tailwind Theme

Reconsider naming convention for the colors define in the global css file. Ideally, this would match whatever theme is being used in the Figma file.

#### Data Fetching/Error Handling

I'm using `SWR` for data fetching. This library has a lot of functionality for error handling and optimisic UI updates. I would reconsider when to automatically retry and when to perform optimisic updates to avoid having the table data emptied when the server returns a 500.

#### Minor UI/UX Updates

- Add a fallback image on the user table when no photo exists for the user - Update the styling of the roles table
- Add a global error handling component that shows when actions fail (e.g. deleting a user, updating a role)
