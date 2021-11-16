import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermissionRoleComponent } from './edit-permission-role.component';

describe('EditPermissionRoleComponent', () => {
  let component: EditPermissionRoleComponent;
  let fixture: ComponentFixture<EditPermissionRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPermissionRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermissionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
