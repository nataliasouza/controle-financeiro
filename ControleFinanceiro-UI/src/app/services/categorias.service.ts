import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url: string = 'api/Categorias';

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }
  PegarCategoriaPeloId(categoriaId : number ): Observable<Categoria>{
    const apiurl = `${this.url}/${categoriaId}`;
    return this.http.get<Categoria>(apiurl);
  }

  NovaCategoria(categoria: Categoria) : Observable<any>{
    return this.http.post<Categoria>(this.url, categoria, httpOptions);
  }

  AtualizarCategoria(categoriaId: number, categoria: Categoria): Observable<any>{
    const apiurl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiurl, categoria, httpOptions);
  }

  ExcluirCategoria(categoriaId: number) : Observable<any>{
    const apiurl = `${this.url}/${categoriaId}`;
    return this.http.delete<number>(apiurl, httpOptions);
  }

}
