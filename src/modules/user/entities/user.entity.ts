import { Roles } from 'src/common/enums/roles';
import { hashPassword } from 'src/common/transformers/crypto-transform';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Nome: string;

  @Column()
  EMail: string;

  @Column()
  Login: string;

  @Column({
    transformer: hashPassword,
  })
  Senha: string;

  @Column()
  Role: Roles;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dataDeCadastro: Date;
}
