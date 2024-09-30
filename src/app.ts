import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { clientRouter } from './client/client.routes.js';
import { productRouter } from './product/product.routes.js';
import { clientClassRouter } from './client/clientClass.routes.js';
import { productBrandRouter } from './product/productBrand.routes.js';
import { productClassRouter } from './product/productClass.routes.js';
import {orm, syncSchema} from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';

// antes de las rutas y middleware de negocio
const app = express();
app.use(express.json());

//luego de los middleware base como express.json()
app.use((req: Request, res: Response, next: NextFunction) => {
    RequestContext.create(orm.em,next)
});
// antes de las rutas y middleware de negocio
app.use('/api/clients', clientRouter);
app.use('/api/client/classes', clientClassRouter);
app.use('/api/products', productRouter);
app.use('/api/product/brands', productBrandRouter);
app.use('/api/product/classes', productClassRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});

await syncSchema() //never in production. This is for development only

app.listen(3000, () => {
    console.log('Server is running');
});