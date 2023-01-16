#!/bin/bash

npm install
npm run typeorm -- -d src/shared/infra/typeorm/index/index.ts migration:run
npm run dev
