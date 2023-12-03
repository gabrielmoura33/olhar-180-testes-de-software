import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from 'src/app/users/entities/users.entity'


@ObjectType()
export class Task {
  @Field(() => ID)
  id: string

  @Field()
  title: string

  @Field()
  description: string

  @Field()
  date: Date

  @Field()
  priority: 'high' | 'medium' | 'low'

  @Field()
  isActive: boolean

  @Field()
  userId: string

  @Field(() => User)
  User: User
}
