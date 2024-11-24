import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductWrapperComponent } from './category-product-wrapper/category-product-wrapper.component';
import { MenuCategory } from 'src/types/menu';

@Component({
    selector: 'app-category-wrapper',
    imports: [CommonModule, CategoryProductWrapperComponent],
    templateUrl: './category-wrapper.component.html',
    styleUrls: ['./category-wrapper.component.scss']
})
export class CategoryWrapperComponent implements OnInit {
  categories: MenuCategory[] = [];

  ngOnInit(): void {
    this.setCategories();
  }

  setCategories() {
    this.categories = [
      {
        id: "1",
        name: 'All-In-1-Meals',
        description: 'Our Contemporary Take on the Authentic Royal Thali. Bon Appetit!'
      },
      {
        id: '2',
        name: 'Desi Box',
        description: 'Our Signature 8 Layer Desi Meal, in a Box! An Amazing Fusion of Flavours. Super Convenient'
      }
    ]
  }
}
