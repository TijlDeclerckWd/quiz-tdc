import { Component, OnInit } from '@angular/core';
import {ResultService} from '../services/result.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import * as $ from 'jquery';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results = [];

  constructor(
    private resultService: ResultService,
    private router: Router,
    private ngxService: NgxUiLoaderService) {}

  ngOnInit() {

    this.resultService.results
      .subscribe((results) => {
      this.results = results;
      if (this.results.length === 0) {
        this.router.navigateByUrl('/');
      }
    });

    this.loadImage();
  }

  defineResult() {
    const finalResult = this.results.reduce((prev, cur) => !!cur.correct ? prev + 1 : prev, 0);

    if (finalResult < 3) {
      return `Unfortunately! You only got ${finalResult} out of ${this.results.length} right. Better luck next time!`;
    } else if (finalResult < 5) {
      return `Congratulations! You got ${finalResult} out of ${this.results.length} right!`;
    } else {
      return `Congratulation! You gave the right answer to all the questions!`;
    }
  }

  evaluateAnswer(answer) {
 return answer.correct ? `/assets/images/succes.png` : `/assets/images/fail.png`;
  }

  loadImage() {
    this.ngxService.start();
    const $img = $('<img/>');
    $img.attr('src', "/assets/images/success.jpg").on('load', () => {
      $img.remove();
      $('.results-section').css('background-image', 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/assets/images/success.jpg")');
      this.ngxService.stop();
    });
  }
}
