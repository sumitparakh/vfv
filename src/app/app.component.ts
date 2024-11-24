import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterModule, CommonModule]
})
export class AppComponent {
  title = 'vfv';
  status = true;
  showToolbar = false;

  constructor(private routerChange: Router) {
    this.routerChange.events.subscribe((val) => {
        this.showToolbar = !(this.routerChange.url === '/video');
    });
  }
}
