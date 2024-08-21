import  { repository } from "../shared/repository.js";
import  { Brand } from "./brand.entity.js";
import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";

const brands = db.collection<Brand>('brands')

export class BrandRepository implements repository<Brand>{
    public async findAll(): Promise< Brand[]| undefined >{
        return await brands.find().toArray();
    }

    public async findOne(item: { id: string; }): Promise < Brand | undefined >{
        const _id = new ObjectId(item.id);
        return (await brands.findOne({_id})) || undefined
    }

    public async add(item: Brand): Promise < Brand | undefined >{
        item._id = (await brands.insertOne(item)).insertedId
        return item;
    }

    public async update(id:string, item: Brand): Promise < Brand | undefined >{
        const _id = new ObjectId(id);
        return (await brands.findOneAndUpdate({_id}, {$set: item}, {returnDocument: 'after'})) || undefined;
    }

    public async delete(item: { id: string; }): Promise < Brand | undefined >{
        const _id = new ObjectId(item.id);
        return (await brands.findOneAndDelete({_id})) || undefined;
    }
}