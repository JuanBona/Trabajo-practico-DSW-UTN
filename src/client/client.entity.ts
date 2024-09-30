import { Entity, Property, ManyToOne, Rel, Ref} from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { ClientClass } from './clientClass.entity.js';
@Entity()
export class Client extends BaseEntity{
         @Property({nullable: false})
         name!: string

         @Property({nullable: false})
         lastname!: string

         @Property({nullable: false})
         birthdate!: Date
         
         @Property({nullable: false})
         email!: string

         @Property({nullable: false})
         phone!: string

         @Property({nullable: false})
         address!: string

         @Property({nullable: false})
         city!: string

         @Property({nullable: false})
         country!: string

         @Property({nullable: false})
         postalCode!: string

         @Property({nullable: false})
         dni!: string

         @ManyToOne (() => ClientClass, {nullable: false})
         clientClass!: Rel<ClientClass>
        
}
// Path: src/client/client.repository.ts