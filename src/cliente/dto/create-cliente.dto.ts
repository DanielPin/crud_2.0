import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(30)
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Sobrenome obrigatório' })
  @MaxLength(255)
  sobrenome: string;

  @IsString()
  @IsNotEmpty({ message: 'RG obrigatório' })
  rg: string;

  @IsString()
  @IsNotEmpty({ message: 'CPF obrigatório' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefone obrigatório' })
  telefone: string;

  @IsString()
  @IsNotEmpty({ message: 'Celular obrigatório' })
  celular: string;

  @IsString()
  @IsNotEmpty({ message: 'Rua obrigatório' })
  rua: string;

  @IsString()
  @IsNotEmpty({ message: 'Bairro obrigatório' })
  bairro: string;

  @IsString()
  @IsNotEmpty({ message: 'Cidade obrigatório' })
  cidade: string;

  @IsString()
  @IsNotEmpty({ message: 'Estado obrigatório' })
  estado: string;
}
