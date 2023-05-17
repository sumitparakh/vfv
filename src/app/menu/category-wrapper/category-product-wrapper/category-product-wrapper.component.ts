import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from 'src/app/components/menu-card/menu-card.component';

@Component({
  selector: 'app-category-product-wrapper',
  standalone: true,
  imports: [CommonModule, MenuCardComponent],
  templateUrl: './category-product-wrapper.component.html',
  styleUrls: ['./category-product-wrapper.component.scss']
})
export class CategoryProductWrapperComponent {

}
