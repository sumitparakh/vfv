import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductWrapperComponent } from './category-product-wrapper/category-product-wrapper.component';
import { MenuCardComponent } from 'src/app/components/menu-card/menu-card.component';

@Component({
  selector: 'app-category-wrapper',
  standalone: true,
  imports: [CommonModule, CategoryProductWrapperComponent, MenuCardComponent],
  templateUrl: './category-wrapper.component.html',
  styleUrls: ['./category-wrapper.component.scss']
})
export class CategoryWrapperComponent {

}
