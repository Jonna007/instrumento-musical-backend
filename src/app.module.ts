import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InstrumentosModule } from './instrumentos/instrumentos.module';

@Module({
  imports: [PrismaModule, InstrumentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
