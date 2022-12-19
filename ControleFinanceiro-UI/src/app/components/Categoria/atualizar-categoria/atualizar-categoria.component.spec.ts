import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCategoriaComponent } from './atualizar-categoria.component';

describe('AtualizarCategoriaComponent', () => {
  let component: AtualizarCategoriaComponent;
  let fixture: ComponentFixture<AtualizarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
