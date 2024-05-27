import express, { NextFunction, Request, Response } from 'express';
import { client } from './client/client.entity.js';
const app = express();
app.use(express.json());
const clients = [
    new client(
        1,
        'John',
        'Doe',
        new Date('1990-01-01'),
        'jhon@doe.com',
        '123456789',
        'Fake St. 123',
        'Springfield',
        'USA',
        '123456',
        '123456789',
        '123456'
    ),
]     
function sanitizeClient(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedClient = {
        id: req.body.id,
        name: req.body.nombre,
        lastname: req.body.apellido,
        birthdate: req.body.birthdate,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        dni: req.body.dni,
        password: req.body.password
    }
    next()
}
app.get ('/clients', (req: Request, res: Response) => {
    res.json(clients);
});

app.get('/clients/:id',(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const client = clients.find(client => client.id === id);
    if (client) {
        res.json(client);
    } else {
        res.status(404).send('Client not found');
    }
});
app.put('/clients/:id', sanitizeClient, (req: Request, res: Response) => {
    const clientId = clients.findIndex(client => client.id === Number(req.params.id));
    if (clientId === -1) {
        res.status(404).send('Client not found');
        return;
    }
    clients[clientId] = {...clients[clientId], ...req.body.sanitizedClient};});

app.post('/clients', sanitizeClient, (req: Request, res: Response) => {
    const clientId = clients.findIndex(client => client.id === Number(req.params.id));
    if (clientId === -1) {
        res.status(404).send('Client not found');
        return;
    }
    clients[clientId] = {...clients[clientId], ...req.body.sanitizedClient};
});
app.delete('/clients/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = clients.findIndex(client => client.id === id);
    if (index !== -1) {
        const deleted = clients[index];
        clients.splice(index, 1);
        res.json(deleted);
    } else {
        res.status(404).send('Client not found');
    }
});
app.get('/', (req: Request, res: Response) => {
    res.send('HelloWorld!');
});
app.listen(3000, () => {
    console.log('Server is running');
});
