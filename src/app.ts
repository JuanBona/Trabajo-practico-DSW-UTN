import express, { NextFunction, Request, Response } from 'express';
import { client } from './client/client.entity.js';
import { clientRouter } from './client/client.routes.js';
import { Order } from './order/order.entity.js';
import { orderRouter } from './order/order.routes.js';

const app = express();
app.use(express.json());

app.use('/api/clients', clientRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});

app.listen(3000, () => {
    console.log('Server is running');
});
