import { IsNumber, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsString({ message: 'Titulo deve ser uma string' })
  titulo!: string;

  @IsNumber({}, { message: 'ano deve ser um número' })
  ano!: number;

  @IsString({ message: 'O genero deve ser uma string.' })
  genero!: string;

  @IsNumber({}, { message: 'Nota tem que ser um numero' })
  nota!: number;
}
