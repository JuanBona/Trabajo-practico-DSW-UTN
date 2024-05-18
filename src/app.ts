import express from 'express';
import { cliente } from './cliente.js';
import { Request, Response, NextFunction } from 'express';
const app = express();
app.use(express.json());
const clientes: cliente[] = [];

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

