import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule, MatListModule} from '@angular/material';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import {ResultService} from './services/result.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
