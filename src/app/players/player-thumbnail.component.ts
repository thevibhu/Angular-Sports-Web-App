import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core'
import { compileComponentFromMetadata } from '@angular/compiler'


@Component({


selector:'player-thumbnail',
templateUrl:'./player-thumbnail.html'





})



export class PlayerThumbnailComponent implements OnInit{
   
    @Output() member = new EventEmitter()
    flag:boolean
    flag2:boolean
    @Input() player:any
    getDetails(){
        alert(this.player.details)
    }
    addToTeam(){
      this.member.emit(this.player)
        
    }
    ngOnInit(){
       
        // if(this.team.length==11){
    
        // }
        // else{
        // this.team.push(this.player)
        // console.log(this.team.length)
        
        // }






    if(sessionStorage.getItem('admin'))
    {
        this.flag=true
        

    }
    else{
        this.flag=null
       
    }
    if(sessionStorage.length!=0){
        this.flag2=true
    }
    else{
        this.flag2=null
    }

    }
}
