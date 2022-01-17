import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermessionComponent } from './permession.component';

describe('PermessionComponent', () => {
  let component: PermessionComponent;
  let fixture: ComponentFixture<PermessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
