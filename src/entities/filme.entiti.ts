export class Filme {
  constructor(
    public __id: number,
    public __titulo: string,
    public __ano: number,
    public __genero: string,
    public __nota: number,
  ) {}

  getId(): number {
    return this.__id;
  }

  getTitulo(): string {
    return this.__titulo;
  }

  getAno(): number {
    return this.__ano;
  }

  getGenero(): string {
    return this.__genero;
  }

  getNota(): number {
    return this.__nota;
  }
}
