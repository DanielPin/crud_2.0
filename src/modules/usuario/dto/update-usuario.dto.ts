import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Roles } from 'src/common/enums/roles';

@InputType()
export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @Field({ nullable: true })
  Nome?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'E-Mail obrigatório' })
  @Field({ nullable: true })
  EMail?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Senha obrigatória' })
  @Field({ nullable: true })
  Senha?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Senha obrigatória' })
  @Field({ nullable: true })
  ConfirmarSenha?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Role Obrigatória' })
  @Field(() => Roles, { nullable: true })
  Role?: Roles;
}
