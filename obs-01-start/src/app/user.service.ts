import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  activatedEmitter = new Subject<boolean>(); // only use subjects when cross components via a service
}
