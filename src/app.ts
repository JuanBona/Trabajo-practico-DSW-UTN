import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { clientRouter } from './client/client.routes.js';
import { orderRouter } from './order/order.routes.js';
import { productRouter } from './product/product.routes.js';
import { categoryRouter } from './category/category.routes.js';
<<<<<<< HEAD
import { orm } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { productBrandRouter } from './product/productBrand.routes.js';
=======
import { brandRouter } from './brand/brand.routes.js';
import { ClientClassRouter } from './client/clientClass.routes.js';
import 'reflect-metadata';
import {orm} from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
>>>>>>> 7189a893bbb3040903ae43bf1da0286562c25cb9

// antes de las rutas y middleware de negocio
const app = express();
app.use(express.json());

<<<<<<< HEAD
app.use((req, res, next) => {
    RequestContext.create(orm.em, next)
})


=======
//luego de los middleware base como express.json()
app.use((req: Request, res: Response, next: NextFunction) => {
    RequestContext.create(orm.em,next)
});
// antes de las rutas y middleware de negocio
>>>>>>> 7189a893bbb3040903ae43bf1da0286562c25cb9
app.use('/api/clients', clientRouter);
app.use('/api/client/classes', ClientClassRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
<<<<<<< HEAD
app.use('/api/products/types', productBrandRouter);
=======
app.use('/api/brands', brandRouter);
>>>>>>> 7189a893bbb3040903ae43bf1da0286562c25cb9

app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});

<<<<<<< HEAD
=======
// await syncSchema(); //never in production. This is for development only
>>>>>>> 7189a893bbb3040903ae43bf1da0286562c25cb9

app.listen(3000, () => {
    console.log('Server is running');
});
