import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MymultPipe } from './mymult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MymultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
