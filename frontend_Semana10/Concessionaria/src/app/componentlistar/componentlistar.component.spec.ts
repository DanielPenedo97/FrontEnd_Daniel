import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListarComponent } from './componentlistar.component';

describe('ComponentlistarComponent', () => {
  let component: ComponentListarComponent;
  let fixture: ComponentFixture<ComponentListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
