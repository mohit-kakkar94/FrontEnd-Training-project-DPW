import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loadingObservable = this.loadingSubject.asObservable();

  constructor() { }

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

}
