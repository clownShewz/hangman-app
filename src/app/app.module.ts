import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HangmanComponent} from "./hangman/hangman.component";
import {HangmangameComponent} from "./hangmangame/hangmangame.component";
import {HangmanwordsComponent} from "./hangmanwords/hangmanwords.component";

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmangameComponent,
    HangmanwordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
