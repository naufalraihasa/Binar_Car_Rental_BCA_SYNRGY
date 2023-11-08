import dotenv from 'dotenv';
import express from 'express';
import carRoute from './routers/carRouter';
import dbSetup from '../config/db-setup';

dbSetup();
dotenv.config({ path: '../.env' })
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/', carRoute); // Mount the carRoute under '/api'

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is currently running at http://localhost:${PORT}`);
});
