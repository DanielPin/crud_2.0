import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthInput {
  @Field()
  login: string;

  @Field()
  password: string;
}
