import { repository } from "../shared/repository.js";
import { client } from "./client.entity.js";
import {db} from '../shared/db/conn.js'
import { ObjectId } from "mongodb";
const clients = db.collection<client>('client');
export class clientRepository implements repository<client>{
    public async findAll(): Promise<client[] | undefined> {
        return await clients.find().toArray();
    }
    public async findOne(item: { id: string }): Promise<client | undefined> {
        const _id = new ObjectId(item.id);
        return (await clients.findOne({_id})) || undefined;
      }
    public async add(item: client): Promise<client | undefined> {
        item._id = (await clients.insertOne(item)).insertedId;
        return item;
    }
    public async update(id:string,item: client): Promise<client | undefined> {
        const _id = new ObjectId(id);
        return (await clients.findOneAndUpdate({_id}, {$set: item}, {returnDocument: 'after'})) || undefined;
    }
    public async delete(item: { id: string }): Promise<client | undefined> {
        const _id = new ObjectId(item.id);
        return (await clients.findOneAndDelete({_id})) || undefined;
    }
}
// Path: src/client/client.controller.ts