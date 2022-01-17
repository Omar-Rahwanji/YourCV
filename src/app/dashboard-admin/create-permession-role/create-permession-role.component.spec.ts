import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermessionRoleComponent } from './create-permession-role.component';

describe('CreatePermessionRoleComponent', () => {
  let component: CreatePermessionRoleComponent;
  let fixture: ComponentFixture<CreatePermessionRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePermessionRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePermessionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
