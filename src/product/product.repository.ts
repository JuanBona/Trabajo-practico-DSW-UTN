import  { repository } from "../shared/repository.js";
import  { Product } from "./product.entity.js";

const products = [
    new Product(
        'cafe',
        'cafe en granos',
        1500,
        100,
        'Cabrales',
        'cafe entero',
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    )
]

export class ProductRepository implements repository<Product>{
    public async findAll(): Promise< Product[]| undefined >{
        return await products;
    }

    public async findOne(item: { id: string; }): Promise < Product | undefined >{
        return await products.find((Product) => Product.idProducto === item.id )
    }

    public async add(item: Product): Promise < Product | undefined >{
        products.push(item)
        return await item;
    }

    public async update(item: Product): Promise < Product | undefined >{
        const index = products.findIndex((Product) => Product.idProducto === item.idProducto);

        if (index !== -1 ){
            products[index] = item;
            return await item;
        }
        return await undefined;
    }

    public async delete(item: { id: string; }): Promise < Product | undefined >{
        const index = products.findIndex((Product) => Product.idProducto === item.id);

        if (index !== -1 ){
            const deletedProducts = products[index]
            products.splice(index, 1)
            return await deletedProducts;
        }
        return await undefined;
    }
}
