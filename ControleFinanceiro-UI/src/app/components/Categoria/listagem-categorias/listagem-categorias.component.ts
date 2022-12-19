import { Component, Inject, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listagem-categorias',
  templateUrl: './listagem-categorias.component.html',
  styleUrls: ['./listagem-categorias.component.css']
})
export class ListagemCategoriasComponent implements OnInit {

  categorias = new MatTableDataSource<any>();
  displayedColumns: string[];


  constructor(private categoriasService: CategoriasService,
    private dialog: MatDialog) {}
  ngOnInit(): void {
    this.categoriasService.PegarTodos().subscribe(result => {
      this.categorias.data = result;
    });

    this.displayedColumns = this.ExibirColunas();
  }

  ExibirColunas(): string[] {
    return ['nome','icone', 'tipo','acoes'];
  }

  AbrirDialog(categoriaId: number, nome: string): void {
    this.dialog.open(DialogExclusaoCategoriasComponent, {
      data: {
        categoriaId: categoriaId,
        nome: nome,
      },
    }).afterClosed().subscribe((result) => {
      if(result === true) {
        this.categoriasService.PegarTodos().subscribe((dados) => {
          this.categorias.data = dados;
        });
        this.displayedColumns = this.ExibirColunas();
      }
    });
  }
}
@Component({
  selector: 'app-dialog-exclusao-categorias',
  templateUrl: 'dialog-exclusao-categorias.html',
})

export class DialogExclusaoCategoriasComponent {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dados: any,
    private categoriasService: CategoriasService
    ){}

  ExcluirCategoria(categoriaId: number): void {
    this.categoriasService.ExcluirCategoria(categoriaId).subscribe(result => {
    });
  }
}

