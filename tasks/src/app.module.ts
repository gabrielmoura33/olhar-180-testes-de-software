import { Module } from '@nestjs/common'
import { TasksModule } from './app/tasks/tasks.module'
import { HttpModule } from './infra/http/http.module'
import { UsersModule } from './app/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './infra/database/database.module'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TasksModule,
    HttpModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
