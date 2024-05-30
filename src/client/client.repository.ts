import { repository } from "../shared/repository.js";
import { client } from "./client.entity.js";
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
export class clientRepository implements repository<client>{
    public findAll(): client[] | undefined {
        return clients;
    }
    public findOne(item: { id: string }): client | undefined {
        return clients.find((client) => client.id === item.id)
      }
    public add(item: client): client | undefined {
        clients.push(item);
        return item;
    }
    public update(item: client): client | undefined {
        const index = clients.findIndex((client) => client.id === item.id);
        if (index !== -1) {
            clients[index] = item;
            return item;
        }
        return undefined;
    }
    public delete(item: { id: string }): client | undefined {
        const index = clients.findIndex((client) => client.id === item.id);
        if (index !== -1) {
            const deleted = clients[index];
            clients.splice(index, 1);
            return deleted;
        }
        return undefined;
    }
}