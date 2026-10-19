import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from '../dto/create-filme-dto';
import { UpdateFilmeDto } from '../dto/update-filme-dto';
import { Filme } from '../entities/filme.entiti';

@Injectable()
export class FilmesService {
  private __filmes: Filme[] = [];
  private idContador = 1;

  create(createFilmeDto: CreateFilmeDto): Filme {
    const novoFilme = new Filme(
      this.idContador++,
      createFilmeDto.titulo,
      createFilmeDto.ano,
      createFilmeDto.genero,
      createFilmeDto.nota,
    );
    this.__filmes.push(novoFilme);
    return novoFilme;
  }

  findAll(): Filme[] {
    return this.__filmes;
  }

  findById(id: number): Filme {
    const encontrarFilmePorId = this.__filmes.find((f) => f.getId() === id);

    if (!encontrarFilmePorId) {
      throw new Error(`Cannot find filme by id`);
    }

    return encontrarFilmePorId;
  }

  findByMinimalScore(minimalScore: number): Filme[] {
    const filtrarPorNota = this.__filmes.filter(
      (f) => f.getNota() === minimalScore,
    );

    if (!filtrarPorNota) {
      throw new Error(`Cannot find filmes`);
    }

    return filtrarPorNota;
  }

  updateFilme(id: number, updateFilmeDto: UpdateFilmeDto): Filme {
    const encontrarFilmeIndexPorId = this.__filmes.findIndex(
      (f) => f.getId() === id,
    );

    if (encontrarFilmeIndexPorId === -1) {
      throw new Error(`Cannot find filme by id`);
    }

    const filmeAtual = this.__filmes[encontrarFilmeIndexPorId];
    const filmeAtualizado = new Filme(
      filmeAtual.getId(),
      updateFilmeDto.titulo !== undefined
        ? updateFilmeDto.titulo
        : filmeAtual.getTitulo(),
      updateFilmeDto.ano !== undefined
        ? updateFilmeDto.ano
        : filmeAtual.getAno(),
      updateFilmeDto.genero !== undefined
        ? updateFilmeDto.genero
        : filmeAtual.getGenero(),
      updateFilmeDto.nota !== undefined
        ? updateFilmeDto.nota
        : filmeAtual.getNota(),
    );

    this.__filmes[encontrarFilmeIndexPorId] = filmeAtualizado;
    return filmeAtualizado;
  }

  remove(id: number): boolean {
    const encontrarFilmeIndexPorId = this.__filmes.findIndex(
      (f) => f.getId() === id,
    );

    if (encontrarFilmeIndexPorId === -1) {
      console.log(`Erro ao deletar filme`);
      return false;
    }

    this.__filmes.splice(encontrarFilmeIndexPorId, 1);
    console.log(`Filme deletado com sucesso`);
    return true;
  }
}
