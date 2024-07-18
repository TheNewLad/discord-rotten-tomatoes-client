# Discord Rotten Tomatoes Server

This web application allows users to sign in with Discord to access and rate TV shows and movies for a specific Discord server. This project aims to provide Discord server-specific reviews, search functionality, commenting, and personalized rating weightings.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend [(Link)](https://github.com/TheNewLad/discord-rotten-tomatoes-server)**: Node.js, Express
- **Database**: Supabase
- **Authentication**: Clerk, Discord OAuth
- **API Integration**: TMDB API for fetching movie details
- **Testing**: Vitest, React Testing Library

## How to Run the Project

### Prerequisites

Ensure you have the following installed:

- npm
- Clerk account for authentication

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/TheNewLad/discord-rotten-tomatoes-client.git
   cd discord-rotten-tomatoes-client
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   VITE_API_URL=api_url
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_ // this is acquired from Clerk
   ```

4. **Start the development server**

   Using npm:

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:5174`.

### Running Tests

To run the tests, use:

```bash
npm test
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
