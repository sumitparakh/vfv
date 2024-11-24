import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryWrapperComponent } from "./category-wrapper/category-wrapper.component";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, CategoryWrapperComponent]
})
export class MenuComponent {


}
