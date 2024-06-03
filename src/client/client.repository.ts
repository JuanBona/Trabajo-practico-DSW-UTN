import { repository } from "../shared/repository.js";
import { client } from "./client.entity.js";
const clients = [
    new client(
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
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]     
export class clientRepository implements repository<client>{
    public async findAll(): Promise< client[] | undefined> {
        return await clients;
    }
    public async findOne(item: { id: string }): Promise<client | undefined> {
        return await clients.find((client) => client.id === item.id)
      }
    public async add(item: client): Promise<client | undefined> {
        clients.push(item);
        return await item;
    }
    public async update(item: client): Promise<client | undefined> {
        const index = clients.findIndex((client) => client.id === item.id);
        if (index !== -1) {
            clients[index] = item;
            return await item;
        }
        return undefined;
    }
    public async delete(item: { id: string }): Promise<client | undefined> {
        const index = clients.findIndex((client) => client.id === item.id);
        if (index !== -1) {
            const deleted = clients[index];
            clients.splice(index, 1);
            return await deleted;
        }
        return await undefined;
    }
}