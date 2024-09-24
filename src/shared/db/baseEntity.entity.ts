import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
@Entity()
export abstract class BaseEntity {
    @PrimaryKey()
    _id?: ObjectId = new ObjectId()
    @SerializedPrimaryKey()
    id?: string
    



/*
    @Property({ type: 'date', onCreate: () => new Date() })
    createdAt = new Date();

    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt = new Date();
*/
}