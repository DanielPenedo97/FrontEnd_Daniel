import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdicionarComponent } from './formadicionar.component';

describe('FormadicionarComponent', () => {
  let component: FormAdicionarComponent;
  let fixture: ComponentFixture<FormAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
