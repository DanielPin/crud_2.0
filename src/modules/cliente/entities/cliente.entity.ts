import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  celular: string;

  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dataDeCadastro: Date;
}
