import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminProfileComponent } from './dashboard-admin-profile.component';

describe('DashboardAdminProfileComponent', () => {
  let component: DashboardAdminProfileComponent;
  let fixture: ComponentFixture<DashboardAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
