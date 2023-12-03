import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { resolve } from 'node:path'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,

    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: resolve(process.cwd(), 'src/schema.gql'),
      uploads: true,
    }),
  ],
  providers: [],
})
export class HttpModule {}
