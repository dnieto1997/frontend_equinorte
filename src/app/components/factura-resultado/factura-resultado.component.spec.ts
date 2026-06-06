import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaResultadoComponent } from './factura-resultado.component';

describe('FacturaResultadoComponent', () => {
  let component: FacturaResultadoComponent;
  let fixture: ComponentFixture<FacturaResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaResultadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
