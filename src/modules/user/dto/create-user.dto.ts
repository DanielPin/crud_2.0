import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Roles } from 'src/common/enums/roles';

@InputType()
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @Field()
  Nome: string;

  @IsString()
  @IsNotEmpty({ message: 'E-Mail obrigatório' })
  @Field()
  EMail: string;

  @IsString()
  @IsNotEmpty({ message: 'Login obrigatório' })
  @Field()
  Login: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha obrigatória' })
  @Field()
  Senha: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha obrigatória' })
  @Field()
  ConfirmarSenha: string;

  @IsNotEmpty({ message: 'Role Obrigatória' })
  @Field(() => Roles)
  Role: Roles;
}
