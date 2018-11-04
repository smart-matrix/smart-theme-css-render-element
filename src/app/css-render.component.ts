import { Component, ViewEncapsulation, Input, ChangeDetectorRef, OnInit, EventEmitter } from '@angular/core';
import { ThemeConfiguration } from '@smart-matrix/smart-schema';
import { IThemeCompiler } from '@smart-matrix/smart-theme';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'fx-css-render',
  templateUrl: './css-render.component.html',
  styleUrls: ['./css-render.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CSSRenderComponent implements OnInit {
  //  Fields
  
  //  Properties
  public CSS: string;

  public CSSChanged: EventEmitter<string>;

  public CSSStyle: SafeStyle ;

  @Input('debug')
  public Debug: boolean;

  @Input('mode')
  public Mode: 'blob' | 'tag';

  @Input('theme')
  public Theme: ThemeConfiguration;

  //  Constructors
  constructor(protected cd: ChangeDetectorRef, protected compiler: IThemeCompiler, protected sanitizer: DomSanitizer) {
    this.Debug = true;
  }

  //  Life Cycle
  public ngOnInit() {
    this.Compile();
  }

  public ngChanges() {
    this.Compile();
  }

  //  API Methods
  public Compile() {
    this.CSS = this.compiler.CompileTheme(this.Theme);

    switch (this.Mode) {
      case 'blob':
        break;
        
      case 'tag':
      default:
        this.CSSStyle = this.sanitizer.bypassSecurityTrustStyle(this.CSS);
        break;
    }
  }
  
  //  Helpers

}
