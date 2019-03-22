import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {questions} from '../../assets/data/questions';
import {ResultService} from '../services/result.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question;
  status = '';

  score = [];
  questionNumber = 0;

  questions = questions;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resultService: ResultService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log('this.score', this.score);
      let number = parseInt(params.number, 10);
      this.questionNumber = number;
      this.question = this.questions[number - 1];
    });
  }

  defineBackground() {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${this.question.background})`);
  }

  evaluateAnswer(answer) {
    if (this.question.correctAnswer === answer) {
      this.status = 'Correct';
      this.score.push({question: this.question, correct: true });
    } else {
      this.status = 'Wrong';
      this.score.push({question: this.question, correct: false });
    }

    if (this.questionNumber < this.questions.length) {
      this.router.navigateByUrl(`/questions/${(this.questionNumber + 1).toString()}`);
    } else {
      this.resultService.results.next(this.score);
      this.router.navigateByUrl(`/results`);
    }
  }

}