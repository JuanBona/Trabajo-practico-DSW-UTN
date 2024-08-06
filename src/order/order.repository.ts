import { repository } from "../shared/repository.js";
import { Order } from "./order.entity.js";

import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";

const orders = db.collection<Order> ('orders');

 
export class OrderRepository implements repository<Order>{

    public async findAll(): Promise< Order[] | undefined>  {
        return await orders.find().toArray()
    }

    public async findOne(item: { id: string; }): Promise< Order | undefined > {
        const _id = new ObjectId(item.id)
        return (await orders.findOne({_id})) || undefined;
    }

    public async add(item: Order): Promise< Order | undefined >{
        item._id = (await orders.insertOne(item)).insertedId
        return item ;
    } 
    
    public async update(id: string, item: Order): Promise < Order | undefined> {
        const _id = new ObjectId(id)
        return (await orders.findOneAndUpdate({_id}, {$set: item}, {returnDocument: 'after'})) || undefined
    }

    public async delete(item: { id: string; }): Promise < Order | undefined> {
        const _id = new ObjectId(item.id)
        return (await orders.findOneAndDelete({_id} )) ||  undefined
    }

}

