import {Component, OnInit} from '@angular/core'


@Component({
    templateUrl:'./team.component.html'
    


})



export class TeamComponent {
finalTeam=""
members=[]


constructor(){

     this.finalTeam=(sessionStorage.getItem('team'));
    this.members=JSON.parse(this.finalTeam)
    
}




}