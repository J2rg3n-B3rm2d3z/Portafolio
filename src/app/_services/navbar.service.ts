import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  selectedOption = new BehaviorSubject<string>('home'); // A observable that use to conect nav component with app component.

  constructor() { }

}
