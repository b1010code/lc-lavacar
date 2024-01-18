import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashtestComponent } from './washtest.component';

describe('WashtestComponent', () => {
  let component: WashtestComponent;
  let fixture: ComponentFixture<WashtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashtestComponent]
    });
    fixture = TestBed.createComponent(WashtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
