import { Module } from '@nestjs/common';
import { InstrumentosService } from './instrumentos.service';
import { InstrumentosController } from './instrumentos.controller';

@Module({
  controllers: [InstrumentosController],
  providers: [InstrumentosService],
})
export class InstrumentosModule {}
