#!/bin/sh
yarn
git add .
git commit -m "chore(api): update dependencies"

npx yarn-audit-fix@latest --force
git add .
git commit -m "chore(api): yarn audit fix"

cd ./frontend && yarn
git add .
git commit -m "chore(frontend): update dependencies"

npx yarn-audit-fix@latest --force
git add .
git commit -m "chore(frontend): yarn audit fix"
