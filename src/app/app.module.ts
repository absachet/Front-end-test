import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { Globals } from './services/globals';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { InputComponent } from './components/input/input.component';
import { InputDirective } from './app.directives/input.directive';
import { ResultDirective } from './app.directives/result.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    CircleButtonComponent,
    InputComponent,
    InputDirective,
    ResultDirective
  ],
  imports: [
    BrowserModule,
    MenuModule,
  ],
  providers: [
    Globals
  ],
  entryComponents: [
    InputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
