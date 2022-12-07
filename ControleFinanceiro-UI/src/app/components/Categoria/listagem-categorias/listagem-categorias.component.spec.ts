import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCategoriasComponent } from './listagem-categorias.component';

describe('ListagemCategoriasComponent', () => {
  let component: ListagemCategoriasComponent;
  let fixture: ComponentFixture<ListagemCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
