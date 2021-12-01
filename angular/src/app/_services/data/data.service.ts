import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  idToChangeProduct$: BehaviorSubject<number>;
  update$: BehaviorSubject<number>;

  constructor() {
    this.idToChangeProduct$ = new BehaviorSubject(1);
    this.update$ = new BehaviorSubject(1);
  }

  public idToChangeProduct(x): void {
    this.idToChangeProduct$.next(x);
  }

  public update(x): void {
    this.update$.next(x);
  }
}
