import { Roles } from 'src/common/enums/roles';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Nome: string;

  @Column()
  EMail: string;

  @Column()
  Login: string;

  @Column()
  Senha: string;

  @Column()
  Role: Roles;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dataDeCadastro: Date;
}