import cors from 'cors';
import express, { json } from 'express';
import chalk from 'chalk';

import authRouter from './routers/auth-router.js'
import tweetsRouter from './routers/tweets-router.js'

const app = express();

app.use(cors());
app.use(json());

app.use(authRouter);
app.use(tweetsRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});