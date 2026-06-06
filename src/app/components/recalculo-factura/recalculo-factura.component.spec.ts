import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalculoFacturaComponent } from './recalculo-factura.component';

describe('RecalculoFacturaComponent', () => {
  let component: RecalculoFacturaComponent;
  let fixture: ComponentFixture<RecalculoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecalculoFacturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecalculoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
