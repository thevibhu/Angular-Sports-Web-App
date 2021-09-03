import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Inject } from '@angular/core';  

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent  {

    
  constructor(
    private loginService: LoginService,
    private router: Router
 )
 {

   


 }
  userName: any;
  password: any;








  login(formValues) {
    this.loginService.loginUser(formValues.userName, formValues.password);
    this.userName = formValues.userName;
    this.password = formValues.password;

    if (this.userName == 'admin' && this.password == 'admin') {
      sessionStorage.setItem(this.userName, this.password);

      this.router.navigate(['players']).then(() => {
        window.location.reload();
      });
    } else if (this.userName == 'guest' && this.password == 'guest') {
      sessionStorage.setItem(this.userName, this.password);

      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
    } else {
      alert('WRONG CREDENTIALS');
      this.router.navigate(['login'])
    }
    
  }
  cancel() {
    this.router.navigate(['home'])
  }
}
