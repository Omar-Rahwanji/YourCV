import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyResumeComponent } from './buy-resume.component';

describe('BuyResumeComponent', () => {
  let component: BuyResumeComponent;
  let fixture: ComponentFixture<BuyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
