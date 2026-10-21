#!/bin/sh
set -e

npm install
npm audit fix --audit-level=high

cd ./frontend
npm install
npm audit fix --audit-level=high
