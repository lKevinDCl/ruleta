import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKdcComponent } from './navbar-kdc.component';

describe('NavbarKdcComponent', () => {
  let component: NavbarKdcComponent;
  let fixture: ComponentFixture<NavbarKdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarKdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarKdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
