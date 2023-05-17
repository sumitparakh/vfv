import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryWrapperComponent } from "./category-wrapper/category-wrapper.component";
import { MenuCardComponent } from '../components/menu-card/menu-card.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, CategoryWrapperComponent, MenuCardComponent]
})
export class MenuComponent {


}
