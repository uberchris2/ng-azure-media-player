import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAmpModule } from 'ng-amp'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAmpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
