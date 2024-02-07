import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuarquivoComponent } from './meuarquivo.component';

describe('MeuarquivoComponent', () => {
  let component: MeuarquivoComponent;
  let fixture: ComponentFixture<MeuarquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuarquivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuarquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
