import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminLayoutComponent } from './dashboard-admin-layout.component';

describe('DashboardAdminLayoutComponent', () => {
  let component: DashboardAdminLayoutComponent;
  let fixture: ComponentFixture<DashboardAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
