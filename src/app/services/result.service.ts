import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()

export class ResultService {

  results = new BehaviorSubject([]);

  constructor() { }
}
