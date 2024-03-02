import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroKdcComponent } from './tablero-kdc.component';

describe('TableroKdcComponent', () => {
  let component: TableroKdcComponent;
  let fixture: ComponentFixture<TableroKdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroKdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroKdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
