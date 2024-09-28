import { Entity, OneToMany, Property, Cascade, Collection } from "@mikro-orm/core";
import { Product } from "./product.entity.js";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";


@Entity()
export class ProductBrand extends BaseEntity{

    @Property({nullable: false, unique: true})
    nombre!: string

    @Property()
    descripcion!: string

    @OneToMany(() => Product, product => product.productBrand, {cascade: [Cascade.ALL]})
    products = new Collection<Product>(this)
}