import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';


@Module({
  imports: [TypeOrmModule.forRoot(), ClienteModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
