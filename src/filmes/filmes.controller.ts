import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFloatPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateFilmeDto } from '../dto/create-filme-dto';
import { UpdateFilmeDto } from '../dto/update-filme-dto';
import { ParseIntPipe } from '../pipes/parse-int.pipe';
import { AuthGuard } from './auth.guard';
import { FilmesService } from './filmes.service';
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor';

@UseGuards(AuthGuard)
@Controller('filmes')
export class FilmesController {
  constructor(private readonly __filmesService: FilmesService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.__filmesService.create(createFilmeDto);
  }

  @UseInterceptors(LoggingInterceptor)
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.__filmesService.findAll();
  }

  @Get('minimal-score/:notaMinima')
  findByMinimalScore(@Param('notaMinima', ParseFloatPipe) notaMinima: number) {
    return this.__filmesService.findByMinimalScore(notaMinima);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.__filmesService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ) {
    return this.__filmesService.updateFilme(id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.__filmesService.remove(id);
  }
}
