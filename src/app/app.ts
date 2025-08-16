import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/private/home/home/home";
import { PublicHeader } from "./components/common/headers/public-header/public-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, PublicHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
