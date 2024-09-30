import {
  Cascade,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Collection
} from "@mikro-orm/core"
import { Product } from "./product.entity.js"
import { BaseEntity } from "../shared/db/baseEntity.entity.js";

@Entity()
export class ProductClass extends BaseEntity{

  @Property({nullable: false, unique: true}) //NOT NULL AT BD, INDEX AT NAME
  name!: string

  @Property()
  description!: string

  @OneToMany(() => Product, (product) => product.productClass, {
    cascade: [Cascade.ALL]   //ORPHAN FAILS AT RELATIONALDBs
  })
  products = new Collection<Product>(this) //SI AGREGO EL THIS NO FUNCIONA
}

