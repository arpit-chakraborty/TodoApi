import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

export default app;