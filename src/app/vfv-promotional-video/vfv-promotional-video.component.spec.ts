import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfvPromotionalVideoComponent } from './vfv-promotional-video.component';

describe('VfvPromotionalVideoComponent', () => {
  let component: VfvPromotionalVideoComponent;
  let fixture: ComponentFixture<VfvPromotionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfvPromotionalVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfvPromotionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
