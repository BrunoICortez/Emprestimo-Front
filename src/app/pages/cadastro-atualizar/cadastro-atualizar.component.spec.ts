import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtualizarComponent } from './cadastro-atualizar.component';

describe('CadastroAtualizarComponent', () => {
  let component: CadastroAtualizarComponent;
  let fixture: ComponentFixture<CadastroAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAtualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
