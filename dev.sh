#!/bin/bash

docker run --rm -it \
  -v $(pwd):/app \
  -v /app/node_modules \
  -w /app \
  -p 5173:5173 \
  node:24-alpine \
  sh -c "npm install && npm run dev -- --host 0.0.0.0"