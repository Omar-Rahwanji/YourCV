import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermessionComponent } from './create-permession.component';

describe('CreatePermessionComponent', () => {
  let component: CreatePermessionComponent;
  let fixture: ComponentFixture<CreatePermessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePermessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePermessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
