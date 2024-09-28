import { Entity, OneToMany, Property, Cascade, Collection } from "@mikro-orm/core";
import { Category } from "./category.entity.js";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";


@Entity()
export class CategoryType extends BaseEntity{

    @Property({nullable: false, unique: true})
    nombre!: string

    @Property()
    descripcion!: string

    @OneToMany(() => Category, category => category.categoryType, {cascade: [Cascade.ALL]})
    categories = new Collection<Category>(this)
}