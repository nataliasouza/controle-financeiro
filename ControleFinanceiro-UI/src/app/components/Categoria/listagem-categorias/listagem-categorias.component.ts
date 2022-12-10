import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-listagem-categorias',
  templateUrl: './listagem-categorias.component.html',
  styleUrls: ['./listagem-categorias.component.css']
})
export class ListagemCategoriasComponent implements OnInit {

  categorias = new MatTableDataSource<any>();
  displayedColumns: string[];

  constructor(private categoriasService: CategoriasService) {}
  ngOnInit(): void {
    this.categoriasService.PegarTodos().subscribe(result => {
      this.categorias.data = result;
    });

    this.displayedColumns = this.ExibirColunas();
  }
  ExibirColunas(): string[] {
    return ['nome','icone', 'tipo','acoes'];
  }
}


