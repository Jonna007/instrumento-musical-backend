import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';

@Injectable()
export class InstrumentosService {
  constructor(private prisma: PrismaService) {}

  create(createInstrumentoDto: CreateInstrumentoDto) {
    return this.prisma.instrumento.create({
      data: createInstrumentoDto,
    });
  }

  findAll() {
    return this.prisma.instrumento.findMany();
  }

  async findOne(id: number) {
    const instrumento = await this.prisma.instrumento.findUnique({
      where: { id },
    });

    if (!instrumento) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }

    return instrumento;
  }

  async update(id: number, updateInstrumentoDto: UpdateInstrumentoDto) {
    try {
      return await this.prisma.instrumento.update({
        where: { id },
        data: updateInstrumentoDto,
      });
    } catch (error) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.instrumento.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
  }
}
