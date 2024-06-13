import { repository } from "../shared/repository.js";
import { Order } from "./order.entity.js";


const orders = [
    new Order(
        new Date('1988-02-21'),
        'pendiente',
        5,
        20000,
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]
 

export class OrderRepository implements repository<Order>{

    public async findAll(): Promise< Order[] | undefined>  {
        return await orders;
    }

    public async findOne(item: { id: string; }): Promise< Order | undefined > {
        return await orders.find((Order) => Order.id === item.id)
    }

    public async add(item: Order): Promise< Order | undefined >{
        orders.push(item);
        return await item ;
    } 
    
    public async  update(item: Order): Promise < Order | undefined> {
        const index = orders.findIndex((Order) => Order.id === item.id);
        if (index !== -1) {
            orders[index] = item;
            return await item;
        }
        return await undefined;
    }

    public async delete(item: { id: string; }): Promise < Order | undefined> {
        const index = orders.findIndex((Order) => Order.id === item.id)
        
        if (index !== -1) { 
            const deleted = orders[index];
            orders.splice(index, 1);
            return await deleted;
        }
        return await undefined;
    }

}

