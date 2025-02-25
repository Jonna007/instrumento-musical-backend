import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { InstrumentosService } from './instrumentos.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';

@Controller('instrumentos')
export class InstrumentosController {
  constructor(private readonly instrumentosService: InstrumentosService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return await this.instrumentosService.create(createInstrumentoDto);
  }

  @Get()
  async findAll() {
    return await this.instrumentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const instrumento = await this.instrumentosService.findOne(+id);
    if (!instrumento) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
    return instrumento;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInstrumentoDto: UpdateInstrumentoDto,
  ) {
    const updatedInstrumento = await this.instrumentosService.update(+id, updateInstrumentoDto);
    if (!updatedInstrumento) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
    return updatedInstrumento;
  }

  @Delete(':id')
  @HttpCode(204) // Añadimos el código de estado 204 para indicar que no hay contenido después de la eliminación
  async remove(@Param('id') id: string) {
    const deleted = await this.instrumentosService.remove(+id);
    if (!deleted) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
  }
}