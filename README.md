## Project overview

React Native To‑Do app: paginated task list consuming a REST API (JSONPlaceholder), React Query for data fetching/caching, Zustand for state, tab navigation (Tasks + History), and Axios with `JSON_API_URL`.

## How to run (step by step)

### 1) Install dependencies (Node/NPM + iOS Pods)

- Install Node.js (which includes **npm**).  
- Install JS dependencies:

```sh
npm install
```

- Install iOS native dependencies (CocoaPods):

```sh
cd ios
pod install
cd ..
```

### 2) Start Metro (dev server)

```sh
npm start
```

### 3) Run on iOS Simulator

In a new terminal:

```sh
npm run ios
```

This project is configured to run iOS on a simulator by default. If you want to pick a specific simulator:

```sh
npx react-native run-ios --simulator "iPhone 15"
```

## Architecture (high level)

This codebase follows a simple layered structure to keep UI, business rules, and integrations separated:

- **`@domain`**: Core business contracts and data structures.
  - Examples: DTOs (`TodoDTO`), service interfaces (`ITodoListService`).

- **`@application`**: Application services (use-cases) that orchestrate domain contracts and external integrations.
  - Example: `ListTodoService` (calls the API and returns data in the expected shape).

- **`components`**: Presentational UI components (mostly “dumb” components).
  - Examples: `TodoItem`, `HeaderComponent`, `CheckboxInput`.

- **`containers`**: Screen/feature orchestration (connects UI to hooks/state/services).
  - Examples: `TodoListContainer` / `useTodoListLogic`, `HistoryContainer` / `useHistoryLogic`.

