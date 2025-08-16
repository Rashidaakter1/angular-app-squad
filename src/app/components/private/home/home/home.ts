import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../common/button/button';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  count = signal(0);
  increment() {
    this.count.update((current) => current + 1);
  }

  decrement() {
    this.count.update((current) => current - 1);
  }

  reset() {
    this.count.set(0);
  }
}
