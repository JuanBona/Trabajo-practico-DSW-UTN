import {Entity,OneToMany,Cascade,Property, Collection} from '@mikro-orm/core'
import {client} from './client.entity.js'
// import { compras } from './compras.entity.js'; // Import the 'compras' type from the appropriate file
import { BaseEntity } from '../shared/db/baseEntity.entity.js';

@Entity()
export class ClientClass extends BaseEntity{
    @Property({nullable: false, unique: false})
    upDate!: Date;
    
    @OneToMany(() => client, (Client: client) => Client.clientClass, {cascade: [Cascade.ALL],})
    clients= new Collection<client>(this)
}