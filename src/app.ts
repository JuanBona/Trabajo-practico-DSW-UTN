import 'reflect-metadata';
import express from 'express';
import { clientRouter } from './client/client.routes.js';
import { productRouter } from './product/product.routes.js';
import { clientClassRouter } from './client/clientClass.routes.js';
import { productBrandRouter } from './product/productBrand.routes.js';
import { productClassRouter } from './product/productClass.routes.js';
import {orm, syncSchema} from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import cors from 'cors';


// antes de las rutas y middleware de negocio
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Permite solicitudes solo desde tu frontend
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Los métodos que quieras permitir
}));

//luego de los middleware base como express.json()
app.use((req, res, next) => {
    RequestContext.create(orm.em,next)
});
// antes de las rutas y middleware de negocio
app.use('/api/clients', clientRouter);
app.use('/api/client/classes', clientClassRouter);
app.use('/api/products', productRouter);
app.use('/api/product/brands', productBrandRouter);
app.use('/api/product/classes', productClassRouter);

app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' })
  })

//await syncSchema() //never in production. This is for development only

app.listen(3000, () => {
    console.log('Server is running');
});