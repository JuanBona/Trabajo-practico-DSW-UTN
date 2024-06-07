import { repository } from "../shared/repository.js";
import { Order } from "./order.entity.js";


const orders = [
    new Order(
        new Date('1988-02-21'),
        'pendiente',
        5,
        20000
    ),
]


export class OrderRepository implements repository<Order>{

    public async findAll(): Promise< Order[] | undefined>  {
        return await orders
    }

    public async findOne(item: { id: string; }): Promise< Order | undefined > {
        return await orders.find((order) => order.id === item.id)
    }

    public async add(item: Order): Promise< Order | undefined >{
        orders.push(item)
        return await item 
    } 
    
    public async  update(item: Order): Promise < Order | undefined> {
        const orderIdx = orders.findIndex((order) => order.id === item.id)

        if (orderIdx !== -1) {
            orders[orderIdx] = {... orders[orderIdx], ...item }
        }
        return await orders[orderIdx]
    }

    public async delete(item: { id: string; }): Promise < Order | undefined> {
        const orderIdx = orders.findIndex((order) => order.id === item.id)
        
        if (orderIdx !== -1) { 
            const deletedOrders = orders[orderIdx]
            orders.splice(orderIdx, 1)
            return await deletedOrders
        }
        return await undefined;
    }

}

