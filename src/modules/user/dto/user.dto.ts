import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { Roles } from 'src/common/enums/roles';

@ObjectType('User')
export class UserDto {
  @Field()
  id: string;

  @Field()
  Nome: string;

  @Field()
  EMail: string;

  @Field()
  Login: string;

  @HideField()
  Senha: string;

  @Field(() => Roles)
  Role: Roles;

  @Field(() => Date)
  dataDeCadastro: Date;
}
