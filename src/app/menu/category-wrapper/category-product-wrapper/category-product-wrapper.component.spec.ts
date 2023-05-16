import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductWrapperComponent } from './category-product-wrapper.component';

describe('CategoryProductWrapperComponent', () => {
  let component: CategoryProductWrapperComponent;
  let fixture: ComponentFixture<CategoryProductWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategoryProductWrapperComponent]
    });
    fixture = TestBed.createComponent(CategoryProductWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
