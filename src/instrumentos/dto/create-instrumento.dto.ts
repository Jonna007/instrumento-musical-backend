import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstrumentoDto {
  @ApiProperty({
    example: 'Guitarra Acústica',
    description: 'El nombre del instrumento',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Cuerda', description: 'El tipo de instrumento' })
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @ApiProperty({ example: 299.99, description: 'El precio del instrumento' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;

  @ApiProperty({
    example: 'Guitarra acústica de 6 cuerdas',
    description: 'Descripción del instrumento',
  })
  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
