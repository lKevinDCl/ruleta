import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletaKdcComponent } from './ruleta-kdc.component';

describe('RuletaKdcComponent', () => {
  let component: RuletaKdcComponent;
  let fixture: ComponentFixture<RuletaKdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuletaKdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuletaKdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
