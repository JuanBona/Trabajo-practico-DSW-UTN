import {
  Cascade,
  Entity,
  OneToMany,
  PrimaryKey,
  Property
} from "@mikro-orm/core"
import { Product } from "./product.entity.js"
import { Collection } from "mongodb"
import { BaseEntity } from "../shared/baseEntity.entity.js"

@Entity()
export class ProductClass extends BaseEntity{

  @Property({nullable: false, unique: true}) //NOT NULL AT BD, INDEX AT NAME
  name!: string

  @Property()
  description!: string

  @OneToMany(() => Product, product => product.productClass, {
    cascade: [Cascade.ALL]   //ORPHAN FAILS AT RELATIONALDBs
  })
  products = new Collection<Product>(this) //SI AGREGO EL THIS NO FUNCIONA
}