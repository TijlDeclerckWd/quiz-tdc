import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.loadImage();
  }

  loadImage() {
    this.ngxService.start();
    const $img = $('<img/>');
    $img.attr('src', "/assets/images/exam.jpg").on('load', () => {
      $img.remove();
      $('.home').css('background-image', 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/assets/images/exam.jpg")');
      this.ngxService.stop();
    });
  }

}
