import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(protected injector: Injector) {
  }
  
  public ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });

    customElements.define('css-render', el);
  }
}
