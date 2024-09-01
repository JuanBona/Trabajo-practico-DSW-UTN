import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { client } from './client/client.entity.js';
import { clientRouter } from './client/client.routes.js';
import { Order } from './order/order.entity.js';
import { orderRouter } from './order/order.routes.js';
import { Product } from './product/product.entity.js';
import { productRouter } from './product/product.routes.js';
import { Category } from './category/category.entity.js';
import { categoryRouter } from './category/category.routes.js';
import { orm } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { categoryTypeRouter } from './category/categoryType.routes.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    RequestContext.create(orm.em, next)
})


app.use('/api/clients', clientRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/categories/types', categoryTypeRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});


app.listen(3000, () => {
    console.log('Server is running');
});
