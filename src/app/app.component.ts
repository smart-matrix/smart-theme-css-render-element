import { Component, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'fx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input('title')
  public Title: string;

  constructor(protected cd: ChangeDetectorRef) {
    this.Title = 'css-render-elemen2.0t';
  }
}
