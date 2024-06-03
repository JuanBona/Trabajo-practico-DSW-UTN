import express, { NextFunction, Request, Response } from 'express';
import { client } from './client/client.entity.js';
import { clientRouter } from './client/client.routes.js';
const app = express();
app.use(express.json());
app.use('/api/clients', clientRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});
app.listen(3000, () => {
    console.log('Server is running');
});
