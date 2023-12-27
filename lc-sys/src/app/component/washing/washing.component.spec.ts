import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingComponent } from './washing.component';

describe('WashingComponent', () => {
  let component: WashingComponent;
  let fixture: ComponentFixture<WashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
