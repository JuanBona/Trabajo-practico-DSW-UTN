import { Entity, Property, ManyToOne, Collection, Cascade, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";
import { ProductBrand } from "./productBrand.entity.js";

@Entity()
export class Product extends BaseEntity{
    @Property({nullable: false})
    nombre!: string

    @Property({nullable: false})
    descripcion!: string

    @Property({nullable: false})
    precio!: string

    @Property({nullable: false})
    stock!: string

    @ManyToOne(() => ProductBrand, {nullable:false})
    productBrand!: Rel<ProductBrand>
}