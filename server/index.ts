import { config } from 'dotenv';
import express from 'express';
import { RoutesConfig } from './config/routes.conf';
import { Routes } from './routes';

config();
const app = express();
const port = process.env.PORT || 4300;

RoutesConfig.init(app);
Routes.init(app, express.Router());

app.listen(port, () => {
  console.log(`Server listening on the port::${port} on ${process.env.NODE_ENV}`);
});
