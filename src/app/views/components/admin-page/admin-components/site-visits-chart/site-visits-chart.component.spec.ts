import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitsChartComponent } from './site-visits-chart.component';

describe('SiteVisitsChartComponent', () => {
  let component: SiteVisitsChartComponent;
  let fixture: ComponentFixture<SiteVisitsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteVisitsChartComponent]
    });
    fixture = TestBed.createComponent(SiteVisitsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
