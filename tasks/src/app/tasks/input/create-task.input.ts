import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field()
  priority: 'low' | 'medium' | 'high';
}
@InputType()
export class UpdateTaskInput extends CreateTaskInput {
  @Field()
  id: string;
}