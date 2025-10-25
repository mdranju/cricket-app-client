# Contributing to Cricket App Client

Thank you for considering contributing to the **Cricket App Client**! We welcome contributions from the community to help make this app better for cricket fans worldwide. Whether it's fixing bugs, adding new features, improving documentation, or enhancing performance, your input is valuable.

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Reporting Issues](#reporting-issues)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [How to Contribute](#how-to-contribute)
- [Code Style and Linting](#code-style-and-linting)
- [Testing](#testing)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Questions?](#questions)

## Reporting Issues

Before creating a new issue, please search the [issue tracker](https://github.com/mdranju/cricket-app-client/issues) to see if it already exists. If it does, feel free to add a comment or upvote it.

When reporting a new issue:

1. Use a clear and descriptive title.
2. Describe the current behavior and the expected behavior.
3. Provide steps to reproduce the issue.
4. Include relevant code snippets, screenshots, or error logs.
5. Specify your environment (e.g., browser, OS, Node.js version).

For feature requests, use the same guidelines but label it as "enhancement" if possible.

## Setting Up the Development Environment

To get started contributing:

1. **Fork the Repository**  
   Go to the [repository](https://github.com/mdranju/cricket-app-client) and click "Fork" to create your own copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/cricket-app-client.git
   cd cricket-app-client
   ```

3. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set Up Environment Variables**  
   Copy `.env.example` to `.env.local` and fill in the required values (e.g., API keys for cricket data services).

   ```
   REACT_APP_CRICKET_API_KEY=your_api_key_here
   REACT_APP_API_BASE_URL=https://api.cricketservice.com/v1
   ```

5. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the app.

6. **Run Tests**
   ```bash
   npm run test
   # or
   yarn test
   ```

## How to Contribute

1. **Create a Feature Branch**  
   Branch off from `main` with a descriptive name:

   ```bash
   git checkout -b feature/add-player-search-filter
   ```

2. **Make Your Changes**

   - Implement your feature or fix.
   - Ensure your code passes linting and tests (see below).
   - Update any relevant documentation (e.g., README.md).

3. **Commit Your Changes**  
   Use clear, concise commit messages following conventional commits:

   ```bash
   git commit -m "feat: add player search filter by nationality"
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/add-player-search-filter
   ```

5. **Open a Pull Request**
   - Go to your fork on GitHub and click "Compare & pull request".
   - Provide a clear description of your changes, including motivation and any related issues.
   - Link to any issues this PR addresses (e.g., "Closes #123").

We use GitHub Actions for CI/CD, so your PR will be automatically tested. Merges require at least one approval.

## Code Style and Linting

We strive for consistent, readable code. Our style is enforced via:

- **ESLint**: For JavaScript/TypeScript linting. Run `npm run lint` to check.
- **Prettier**: For code formatting. Run `npm run format` to auto-format.
- **TypeScript**: Strict typing is required.

Before committing, run:

```bash
npm run lint:fix
npm run format
```

Ignore files are handled by `.gitignore` and `.eslintignore`. New components should follow patterns in `src/components/`.

## Testing

Tests are crucial for maintaining quality. We use:

- **Jest** and **React Testing Library** for unit and integration tests.
- **Cypress** for end-to-end tests (optional for now).

1. Write tests for new features or bug fixes in `__tests__` folders.
2. Run tests with `npm run test`.
3. Aim for >80% coverage on new code.

## Pull Request Guidelines

- **Small and Focused**: Keep PRs to a single concern (e.g., one feature or bug fix).
- **Descriptive Title**: Use action-oriented titles (e.g., "fix: resolve live score update lag").
- **Description**: Include:
  - What and why.
  - How to test.
  - Screenshots/GIFs if UI changes.
- **Rebase on Main**: Ensure your branch is up-to-date with `main`.
- **Squash Commits**: If needed, squash into logical units before merging.

PRs are reviewed promptly. Expect feedback within a few days.

## Questions?

If you have questions about the codebase, setup, or contributing process, feel free to:

- Open a discussion on GitHub.
- Reach out via email to the maintainer (see README.md).
- Join our community chat (TBD – suggest one?).

Happy coding! 🏏
