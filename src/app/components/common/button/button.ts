import { Component, input } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-button',
  template: ` <p-button [label]="label()" />`,
  imports: [Button],
})
export class ButtonComponent {
  label = input.required<string>();
}
