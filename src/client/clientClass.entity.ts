import {
  Entity,
  OneToMany,
  Property,
  Cascade,
  Collection,
} from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { Client } from './client.entity.js'

@Entity()
export class ClientClass extends BaseEntity {
  @Property({ nullable: false, unique: true })
  name!: string

  @OneToMany(() => Client, (client) => client.clientClass, {cascade: [Cascade.ALL],})
  clients = new Collection<Client>(this)
}