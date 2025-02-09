import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoutingComponent } from './admin-routing.component';

describe('AdminRoutingComponent', () => {
  let component: AdminRoutingComponent;
  let fixture: ComponentFixture<AdminRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoutingComponent]
    });
    fixture = TestBed.createComponent(AdminRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
