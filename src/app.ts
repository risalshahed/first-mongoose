import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Prettier Code to indent & also remove unnecessary empty lines & spaces
// npx prettier --write src/app.ts
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Directory of the Project Root
console.log(process.cwd());

export default app;
