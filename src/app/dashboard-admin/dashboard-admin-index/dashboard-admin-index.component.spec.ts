import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminIndexComponent } from './dashboard-admin-index.component';

describe('DashboardAdminIndexComponent', () => {
  let component: DashboardAdminIndexComponent;
  let fixture: ComponentFixture<DashboardAdminIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
