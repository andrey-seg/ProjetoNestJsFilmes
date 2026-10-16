import { Injectable } from '@nestjs/common';
import { Filme } from './entities/filme.entity';
import { Nota } from './common/nota-type';
import { find } from 'rxjs';

@Injectable()
export class FilmesService {

    private __filmes: Filme[] = [];
    private __idContador = 1;

    create(dadosFilme: Omit<Filme, 'id'>): Filme{
        const novoFilme = new Filme(
            this.__idContador++, 
            dadosFilme.getTitulo(), 
            dadosFilme.getAno(), 
            dadosFilme.getGenero(), 
            dadosFilme.getDiretor(), 
            dadosFilme.getNota()
        );

        this.__filmes.push(novoFilme);
        return novoFilme;
    }

    findAll(): Filme[]{
        return this.__filmes;
    }

    findById(id: number): Filme | undefined{
        const findFilmeById = this.__filmes.find((f) => f.getId() === id);

        if(!findFilmeById){
            throw new Error(`Cannot find filme by id.`);
        }

        return findFilmeById;
    }

    findByNotaMinima(nota: number): Filme[]{
        const findByNotaMinima = this.__filmes.filter((f) => f.getNota() === nota);

        return findByNotaMinima;
    }

    update(id: number, dadosAtualizados: Partial<Omit<Filme, 'id'>>): Filme | null{

        const index = this.__filmes.findIndex((f) => f.getId() === id);

        this.__filmes[index] = {}
        return this.__filmes[index];
    }

    remove(id: number): boolean{
        const findIndexById = this.__filmes.findIndex((f) => f.getId() === id);

        if(findIndexById === -1){
            return false;
        }

        this.__filmes.splice(findIndexById, 1);
        return true;
    }
}
