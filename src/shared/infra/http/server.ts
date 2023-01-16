/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';

import { dataSource } from '../typeorm';

dataSource.initialize().then(() => {
  const server = app.listen(process.env.PORT || 3333, () => {
    console.log(`server started on port ${process.env.APP_API_URL}`);
  });
});
