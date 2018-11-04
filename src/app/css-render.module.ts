import { IThemeCompiler, SmartThemeSCSSCompilerService } from '@smart-matrix/smart-theme';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CSSRenderComponent } from './css-render.component';

@NgModule({
  declarations: [
    CSSRenderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: IThemeCompiler, useClass: SmartThemeSCSSCompilerService }
  ],
  entryComponents: [
    CSSRenderComponent
  ]
})
export class AppModule { 
  constructor(protected injector: Injector) {
  }
  
  public ngDoBootstrap() {
    const el = createCustomElement(CSSRenderComponent, { injector: this.injector });

    customElements.define('fx-css-render', el);
  }
}
