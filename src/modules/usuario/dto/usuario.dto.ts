import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Roles } from 'src/common/enums/roles';

@ObjectType('Usuario')
export class UsuarioDto {
  @Field()
  id: string;

  @Field()
  Nome: string;

  @Field()
  EMail: string;

  @Field()
  Login: string;

  @Field()
  Senha: string;

  @Field(() => Roles)
  Role: Roles;

  @Field(() => Date)
  dataDeCadastro: Date;
}
