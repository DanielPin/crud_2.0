import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService, UsuarioResolver],
})
export class UsuarioModule {}
