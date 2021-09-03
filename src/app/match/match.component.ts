import {Component, OnInit} from '@angular/core'
import { MatchService } from '../shared/match.service';

@Component({



templateUrl:'./match.component.html'





})



export class MatchComponent implements OnInit{
    match:any
constructor (private matchService:MatchService){ 
   
}

ngOnInit(){
    this.match=this.matchService.getMatch()
}
}