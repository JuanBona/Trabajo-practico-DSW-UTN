import { MikroORM } from '@mikro-orm/core'
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter'
import { MongoDriver } from '@mikro-orm/mongodb'
export const orm = await MikroORM.init<MongoDriver>({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'donjulio',
  clientUrl: 'mongodb://localhost:27017',
  highlighter: new MongoHighlighter(),
  debug: true,
  schemaGenerator: {
    //never in production
    disableForeignKeys: true,
    createForeignKeyConstraints: true,
    ignoreSchema: [],
  },
})

export const syncSchema = async () => {
  const generator = orm.getSchemaGenerator()
  /*   
  await generator.dropSchema()
  await generator.createSchema()
  */
  await generator.updateSchema()
}