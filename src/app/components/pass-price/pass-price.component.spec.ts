import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassPriceComponent } from './pass-price.component';

describe('PassPriceComponent', () => {
  let component: PassPriceComponent;
  let fixture: ComponentFixture<PassPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PassPriceComponent]
    });
    fixture = TestBed.createComponent(PassPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
