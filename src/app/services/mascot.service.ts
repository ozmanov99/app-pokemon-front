import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MascotService {
  private jumpSubject = new Subject<string>(); // string = type de booster
  jump$ = this.jumpSubject.asObservable();

  // Méthode à appeler pour déclencher le saut
  triggerJump(type: string) {
    this.jumpSubject.next(type);
  }
}
