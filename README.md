# Cricket App Client

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-orange.svg)](https://www.typescriptlang.org/)

A modern, responsive client-side application for tracking live cricket scores, match schedules, player statistics, and more. Built with React and TypeScript, this app provides an engaging interface for cricket enthusiasts to stay updated with their favorite teams and tournaments.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Live Score Updates**: Real-time match scores and commentary via WebSocket integration.
- **Match Schedules**: View upcoming and past matches with filters by team, series, or date.
- **Player Stats**: Detailed statistics for players, including batting/bowling averages, strike rates, and career highlights.
- **Team Rankings**: Interactive charts for ICC rankings and tournament standings.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Search & Favorites**: Quick search functionality and bookmark your favorite teams/players.
- **Dark/Light Mode**: Toggle between themes for better accessibility.

## Tech Stack

| Category             | Technology                      |
| -------------------- | ------------------------------- |
| **Frontend**         | React 19, TypeScript            |
| **Styling**          | Tailwind CSS, Styled-Components |
| **State Management** | Redux Toolkit, React Query      |
| **Routing**          | React Router DOM                |
| **API Client**       | Axios                           |
| **Testing**          | Jest, React Testing Library     |
| **Build Tool**       | Vite                            |
| **Other**            | ESLint, Prettier                |

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mdranju/cricket-app-client.git
   cd cricket-app-client
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173`.

## Usage

- Navigate to different sections using the sidebar menu: Home, Matches, Teams, Players, Rankings.
- Use the search bar to find specific matches or players.
- Toggle live updates for ongoing matches.
- For production build:
  ```bash
  npm run build
  # Serve the build folder with your preferred static server
  ```

## API Integration

This app integrates with a cricket data API (e.g., CricAPI or similar). Key endpoints used:

- `GET /matches/live`: Fetch live matches.
- `GET /players/{id}/stats`: Retrieve player statistics.
- `GET /teams/rankings`: Get team rankings.

Ensure your API key is valid and rate limits are respected. For more details, refer to the [API documentation](https://example-crickapi.com/docs).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

### Code Style

- Use Prettier for formatting.
- Follow ESLint rules.
- Write tests for new features.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Md Ranju
- **Email**: mdranju23@gmail.com
- **Issues**: Report bugs or request features [here](https://github.com/mdranju/cricket-app-client/issues)

---

_Built with ❤️ for cricket fans. Let's make this app the ultimate companion for every match!_
