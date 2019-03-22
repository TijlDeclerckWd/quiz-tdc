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
import {NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsOpacity: 1,
  pbThickness: 10, // progress bar thickness
  fgsSize: 120,
  bgsType: SPINNER.rotatingPlane,
  fgsType: SPINNER.chasingDots,
  overlayColor: 'rgba(40, 40, 40, .9)'
};

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
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatButtonModule,
    MatListModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
