import { Entity, Property, ManyToOne, Collection, Cascade, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";
import { CategoryType } from "./categoryType.entity.js";

@Entity()
export class Category extends BaseEntity{
    @Property({nullable: false})
    nombre!: string

    @Property({nullable: false})
    descripcion!: string

    @ManyToOne(() => CategoryType, {nullable:false})
    categoryType!: Rel<CategoryType>
}


