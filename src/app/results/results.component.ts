import { Component, OnInit } from '@angular/core';
import {ResultService} from '../services/result.service';
import {Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results = [];

  constructor(private resultService: ResultService, private router: Router) {}

  ngOnInit() {
    this.resultService.results
      .subscribe((results) => {
      this.results = results;
      if (this.results.length === 0) {
        this.router.navigateByUrl('/');
      }
    });
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
}
