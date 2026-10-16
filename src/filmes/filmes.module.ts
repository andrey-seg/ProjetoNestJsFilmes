import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService]
})
export class FilmesModule {}
