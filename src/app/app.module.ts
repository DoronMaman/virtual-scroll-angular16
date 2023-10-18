import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatIconModule, BrowserAnimationsModule,ScrollingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
