import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import{userRoutes} from './user.routes'
import{FormsModule} from '@angular/forms'
import {LoginComponent} from './login.component'
import { RouterModule } from '@angular/router'


@NgModule({
imports:[
    CommonModule,
    FormsModule, 
    RouterModule.forChild(userRoutes)
],
declarations:[
    LoginComponent
],
providers:
[

]




})


export class UserModule{
    
}
