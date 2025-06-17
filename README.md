# GitHub Repo Explorer

A React + Redux Toolkit application to search GitHub users, view their profiles, and browse their repositories with filtering and pagination.

## Features

- Search GitHub users
- View user profile (avatar, name, company, location, etc.)
- View public repositories with:
  - Paginated list (First, numbered pages, Last)
  - Realtime loading indicator with animation
- View stars, forks, and watchers
- Link to GitHub repo
- Dark/Light theme toggle


---

## Tech Stack

- React + TypeScript
- Redux Toolkit
- React Hook Form
- Tailwind CSS
- GitHub REST API
- Axios

---

## Demo

https://rafyfakhrizal299.github.io/github-repo-explorer/

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rafyfakhrizal299/github-repo-explorer.git
cd github-repo-explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm start
```
---

## Project Structure
src/
├── components/
│   └── common/         # Reusable components (e.g. Pagination)
├── features/
│   ├── users/          # Search, list, profile, slice
│   └── repos/          # Repo grid, repo slice
├── hooks/              # Typed Redux hooks
├── store.ts            # Redux store
├── App.tsx             # Root component
└── main.tsx            # Entry point

---

Hopefully the project is as desired. 
Thanks.