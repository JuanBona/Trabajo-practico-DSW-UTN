import  { repository } from "../shared/repository.js";
import  { Category } from "./category.entity.js";

const categories = [
    new Category(
        'Cafe e infusiones',
        'Una gran variedad de la mejor calidad de cafes e infusiones.',
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    )
]

export class CategoryRepository implements repository<Category>{
    public async findAll(): Promise< Category[]| undefined >{
        return await categories;
    }

    public async findOne(item: { id: string; }): Promise < Category | undefined >{
        return await categories.find((Category) => Category.idCategory === item.id )
    }

    public async add(item: Category): Promise < Category | undefined >{
        categories.push(item)
        return await item;
    }

    public async update(item: Category): Promise < Category | undefined >{
        const index = categories.findIndex((Category) => Category.idCategory === item.idCategory);

        if (index !== -1 ){
            categories[index] = item;
            return await item;
        }
        return await undefined;
    }

    public async delete(item: { id: string; }): Promise < Category | undefined >{
        const index = categories.findIndex((Category) => Category.idCategory === item.id);

        if (index !== -1 ){
            const deletedCategories = categories[index]
            categories.splice(index, 1)
            return await deletedCategories;
        }
        return await undefined;
    }
}