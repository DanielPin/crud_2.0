import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteResolver } from './cliente.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService, ClienteResolver],
  controllers: [ClienteController],
})
export class ClienteModule {}
