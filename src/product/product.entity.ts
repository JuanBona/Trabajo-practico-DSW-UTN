<<<<<<< HEAD
import {
    Entity,
    Property,
    ManyToMany,
    Cascade,
    ManyToOne,
    Rel,
} from '@mikro-orm/core'
import { BaseEntity } from '../shared/baseEntity.entity.js'
import { ProductClass } from './productClass.entity.js'

@Entity()
export class Product extends BaseEntity {
    @Property({ nullable: false })
    name!: string

    @ManyToOne(() => ProductClass, { nullable: false})
    productClass!: Rel<ProductClass>

    @Property({ nullable: false })
    description!: string

    @Property({ nullable: false })
    precio!: number

    @Property({ nullable: false })
    stock!: number

    @Property({ nullable: false })
    brand!: string

    //CASCADE @MANYTOMANY NOT NEEDED
=======
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
>>>>>>> 3aace16b336f22fd5dfb93ad4614141f5805a021
}