import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRouter from './route/AuthRoute.js';
import DashboardRouter from './route/DashboardRoute.js';
import { VERSION, MEDIA } from './constants/routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(VERSION, AuthRouter);
app.use(`${VERSION}${MEDIA}`, DashboardRouter);
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Error 404' });
});

const PORT = process.env.PORT || 5000;

function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT} ....`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();
