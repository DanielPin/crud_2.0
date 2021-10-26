import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateClienteDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(30)
  @Field()
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Sobrenome obrigatório' })
  @MaxLength(255)
  @IsOptional()
  @Field({ nullable: true })
  sobrenome: string;

  @IsString()
  @IsNotEmpty({ message: 'RG obrigatório' })
  @Field()
  rg: string;

  @IsString()
  @IsNotEmpty({ message: 'CPF obrigatório' })
  @Field()
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefone obrigatório' })
  @Field()
  telefone: string;

  @IsString()
  @IsNotEmpty({ message: 'Celular obrigatório' })
  @Field()
  celular: string;

  @IsString()
  @IsNotEmpty({ message: 'Rua obrigatório' })
  @Field()
  rua: string;

  @IsString()
  @IsNotEmpty({ message: 'Bairro obrigatório' })
  @Field()
  bairro: string;

  @IsString()
  @IsNotEmpty({ message: 'Cidade obrigatório' })
  @Field()
  cidade: string;

  @IsString()
  @IsNotEmpty({ message: 'Estado obrigatório' })
  @Field()
  estado: string;
}
