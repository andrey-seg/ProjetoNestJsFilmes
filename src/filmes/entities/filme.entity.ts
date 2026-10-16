import { Nota } from "../common/nota-type";

export class Filme{
    private __id: number;
    private __titulo: string;
    private __ano: string;
    private __genero: string;
    private __diretor: string;
    private __nota: Nota;

    constructor(id: number, titulo: string, ano: string, genero: string, diretor: string, nota: Nota){
        this.__id = id;
        this.__titulo = titulo;
        this.__ano = ano;
        this.__genero = genero;
        this.__diretor = diretor;
        this.__nota = nota;
    }

    getId(): number{
        return this.__id;
    }

    getTitulo(): string{
        return this.__titulo;
    }

    getAno(): string{
        return this.__ano;
    }

    getGenero(): string{
        return this.__genero;
    }

    getDiretor(): string{
        return this.__diretor;
    }

    getNota(): Nota{
        return this.__nota;
    }
}