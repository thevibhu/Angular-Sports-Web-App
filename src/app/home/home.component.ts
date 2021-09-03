import {Component, OnInit} from '@angular/core'
import { HomeService } from '../shared/home.service';

@Component({

templateUrl:'./home.component.html'





})



export class HomeComponent implements OnInit{
    home:any
    user:string
constructor (private homeService:HomeService){ 
    
}

ngOnInit(){
    
}


    
}