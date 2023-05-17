import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { PassPriceComponent } from '../pass-price/pass-price.component';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, CounterButtonComponent, PassPriceComponent],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {

}
