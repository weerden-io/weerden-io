# weerden.io

The weerden.io website!

[![build status frontend](https://github.com/jimenezweerden/weerden-io/workflows/lint-and-test-frontend/badge.svg)](https://github.com/jimenezweerden/weerden-io/actions)
## Requirements

- Node.js ^22.22.3 or ^24.15.0
- yarn 1.x

## Development

- `yarn server-init` installs the backend dependencies and builds the frontend
- `yarn start-dev` runs the frontend (port 4200) and backend (port 4300) in watch mode
- `yarn start` serves the production frontend build through the backend on port 4300

## Frontend

The Angular app lives in `./frontend`. See `frontend/README.md` for the available scripts.

## Backend

The Express server lives in `./server`. It serves the frontend production build and exposes
the `/api/rss` endpoint. Run `yarn typecheck` to type-check the server code.
