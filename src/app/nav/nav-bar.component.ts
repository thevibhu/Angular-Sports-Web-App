import {Component,OnInit} from '@angular/core'
import { LoginService } from '../login/login.service'
import { StringifyOptions } from 'querystring'
import { Session } from 'protractor'

@Component({


selector:'nav-bar',
templateUrl:'./nav-bar.component.html',





})



export class NavBarComponent implements OnInit {
    username:string
ngOnInit(){
   
   
}

constructor (public login:LoginService){
    this.username=sessionStorage.getItem('guest')
    if(this.username==null)
    {
        this.username=sessionStorage.getItem('admin')
    }
    
}}