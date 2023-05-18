import { Component, Input, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'src/types/menu';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  @Input() item?: MenuItem;

  constructor(@Inject(CartService) private cartService: CartService) {
  
  }

  ngOnInit(): void {
    
  }

  addItem() {

  }
}
