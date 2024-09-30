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
}