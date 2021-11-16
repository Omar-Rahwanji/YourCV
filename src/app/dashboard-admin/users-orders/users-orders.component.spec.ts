import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrdersComponent } from './users-orders.component';

describe('UsersOrdersComponent', () => {
  let component: UsersOrdersComponent;
  let fixture: ComponentFixture<UsersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
