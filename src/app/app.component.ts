import { Component } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  template: `<nav-bar></nav-bar>
            <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  title = 'BCCI';
}
