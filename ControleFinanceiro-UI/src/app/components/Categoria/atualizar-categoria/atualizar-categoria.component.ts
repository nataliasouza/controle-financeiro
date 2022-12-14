import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { Tipo } from 'src/app/models/Tipo';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['./atualizar-categoria.component.css']
})
export class AtualizarCategoriaComponent implements OnInit {
  nomeCategoria : string;
  categoriaId : number;
  categoria : Observable<Categoria>;
  tipos: Tipo[];
  formulario: any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private tiposService : TiposService,
    private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.params['id'];
    this.tiposService.PegarTodos().subscribe(resultado => {
      this.tipos = resultado;
    });

    this.categoriasService.PegarCategoriaPeloId(this.categoriaId).subscribe(resultado => {
      this.nomeCategoria = resultado.nome;
      this.formulario = new FormGroup({
        categoriaId : new FormControl(resultado.categoriaId),
        nome : new FormControl(resultado.nome),
        icone : new FormControl(resultado.icone),
        tipoId : new FormControl(resultado.tipoId),
      });
    });
  }

  get propriedade() {
    return this.formulario.controls;
  }

  EnviarFormulario() : void {
    const categoria = this.formulario.value;
    this.categoriasService.AtualizarCategoria(this.categoriaId, categoria)
    .subscribe(result => {
      this.router.navigate(['categorias/listagemcategorias']);
    });
  }

  VoltarListagem() : void {
    this.router.navigate(['categorias/listagemcategorias']);
  }
}
