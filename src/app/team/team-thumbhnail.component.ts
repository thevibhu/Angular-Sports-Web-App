import {Component,Input} from '@angular/core'
@Component({
selector:'team-thumbnail',
templateUrl:'./team-thumbnail.component.html'

})



export class TeamThumbnailComponent{
    flag:boolean=false
    @Input() member:any
    getDetails(){
        alert(this.member.details)
    }

    details(){
       this.flag=true
    }
}