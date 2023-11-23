import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/user/user.route';
const app: Application = express();

app.use(express.json);
app.use(cors());

app.use('/api/users', UserRoute)

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
}
app.get('/', getAController);



export default app;
