import { Entity, Property, ManyToOne, Rel} from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { ClientClass } from './clientClass.entity.js';
@Entity()
export class client extends BaseEntity{
         @Property({nullable: false, unique: false})
         name!: string

         @ManyToOne (() => ClientClass, {nullable: false})
         clientClass!: Rel<ClientClass>

         @Property({nullable: false, unique: false})
         lastname!: string

         @Property({nullable: false, unique: false})
         birthdate!: Date
         
         @Property({nullable: false, unique: false})
         email!: string

         @Property({nullable: false, unique: false})
         phone!: string

         @Property({nullable: false, unique: false})
         address!: string

         @Property({nullable: false, unique: false})
         city!: string

         @Property({nullable: false, unique: false})
         country!: string

         @Property({nullable: false, unique: false})
         postalCode!: string

         @Property({nullable: false, unique: false})
         dni!: string
         

}
// Path: src/client/client.repository.ts