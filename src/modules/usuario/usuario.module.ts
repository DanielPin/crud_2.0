import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';

@Module({
  providers: [UsuarioService, UsuarioResolver]
})
export class UsuarioModule {}
