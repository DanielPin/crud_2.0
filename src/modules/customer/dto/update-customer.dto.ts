import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class UpdateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(30)
  @IsOptional()
  @Field({ nullable: true })
  nome?: string;

  @IsString()
  @IsNotEmpty({ message: 'Sobrenome obrigatório' })
  @MaxLength(255)
  @IsOptional()
  @Field({ nullable: true })
  sobrenome?: string;

  @IsString()
  @IsNotEmpty({ message: 'RG obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  rg?: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefone obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  telefone?: string;

  @IsString()
  @IsNotEmpty({ message: 'Celular obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  celular?: string;

  @IsString()
  @IsNotEmpty({ message: 'Rua obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  rua?: string;

  @IsString()
  @IsNotEmpty({ message: 'Bairro obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  bairro?: string;

  @IsString()
  @IsNotEmpty({ message: 'Cidade obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  cidade?: string;

  @IsString()
  @IsNotEmpty({ message: 'Estado obrigatório' })
  @IsOptional()
  @Field({ nullable: true })
  estado?: string;
}
