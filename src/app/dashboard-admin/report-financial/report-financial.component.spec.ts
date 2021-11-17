import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFinancialComponent } from './report-financial.component';

describe('ReportFinancialComponent', () => {
  let component: ReportFinancialComponent;
  let fixture: ComponentFixture<ReportFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
