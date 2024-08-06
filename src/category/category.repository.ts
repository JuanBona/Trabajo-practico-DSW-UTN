import  { repository } from "../shared/repository.js";
import  { Category } from "./category.entity.js";
import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";

const categories = db.collection<Category>('categories')

export class CategoryRepository implements repository<Category>{
    public async findAll(): Promise< Category[]| undefined >{
        return await categories.find().toArray();
    }

    public async findOne(item: { id: string; }): Promise < Category | undefined >{
        const _id = new ObjectId(item.id);
        return (await categories.findOne({_id})) || undefined
    }

    public async add(item: Category): Promise < Category | undefined >{
        item._id = (await categories.insertOne(item)).insertedId
        return item;
    }

    public async update(id:string, item: Category): Promise < Category | undefined >{
        const _id = new ObjectId(id);
        return (await categories.findOneAndUpdate({_id}, {$set: item}, {returnDocument: 'after'})) || undefined;
    }

    public async delete(item: { id: string; }): Promise < Category | undefined >{
        const _id = new ObjectId(item.id);
        return (await categories.findOneAndDelete({_id})) || undefined;
    }
}