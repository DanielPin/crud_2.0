import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Cliente')
export class ClienteDTO {
  @Field()
  id: string;

  @Field()
  nome: string;

  @Field()
  sobrenome: string;

  @Field()
  rg: string;

  @Field()
  cpf: string;

  @Field()
  telefone: string;

  @Field()
  celular: string;

  @Field()
  rua: string;

  @Field()
  bairro: string;

  @Field()
  cidade: string;

  @Field()
  estado: string;

  @Field(() => Date)
  dataDeCadastro: Date;
}
