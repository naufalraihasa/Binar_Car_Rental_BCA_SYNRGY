// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is currently running at http://localhost:${port}`);
// });

import { Request, Response, NextFunction } from 'express';
import dbSetup from '../config/db-setup';
import express from 'express';
import User from './models/user';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' })
dbSetup();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// In production, you would want to use a router in a separate file

app.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await User.query().findById(id).withGraphFetched('channel');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is currently running at http://localhost:${PORT}`);
});
