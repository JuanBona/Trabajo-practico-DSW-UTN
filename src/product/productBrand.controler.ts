import { Request, Response } from "express" 
import { orm } from "../shared/db/orm.js"
import { ProductBrand } from "./productBrand.entity.js"
import { ObjectId } from '@mikro-orm/mongodb';

const em = orm.em

async function findAll(req:Request, res:Response){
    try{
        const productBrands = await em.find(ProductBrand, {})
        res.status(200).json({message: 'found all product brands', data:productBrands})
    } catch (error: any){
        res.status(500).json({message: error.message})
    }
}

async function findOne(req:Request, res:Response){
    try{
        const id = req.params.id
        const objectId = new ObjectId(id); 
        const productBrand = await em.findOneOrFail(ProductBrand, { _id: objectId })
        res.status(200).json({message: 'found product brand', data: productBrand})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function add(req: Request, res: Response){
    try{
        const productBrand = em.create(ProductBrand, req.body)
        await em.flush()
        res.status(201).json({message: 'product brand created', data: productBrand})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function update(req: Request, res: Response){
    try{
        const id = req.params.id
        const objectId = new ObjectId(id);
        const productBrand = em.getReference(ProductBrand, objectId )
        em.assign(productBrand, req.body)
        await em.flush()
        res.status(200).json({message: 'product brand updated'})
    } catch(error:any){
        res.status(500).json({message: error.message})
    }
}

async function remove(req: Request, res: Response){
    try{
        const id = req.params.id
        const objectId = new ObjectId(id);
        const productBrand = em.getReference(ProductBrand, objectId )
        await em.removeAndFlush(productBrand)
        res.status(200).send({message: 'product brand deleted'})
    } catch(error:any){
        res.status(500).json({message: error.message})
    }
}

export {findAll, findOne, add, update, remove}