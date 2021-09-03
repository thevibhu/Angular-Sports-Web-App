import {Injectable} from '@angular/core'
import {IUser} from './login.model'

@Injectable()
export class LoginService{
    currentUser:IUser
    session:IUser
    
    loginUser(userName:string, passowrd:string)
{
this.currentUser={
    userName:userName
}
var user=userName

return user



}
isAuthenticated(){
    return !!this.currentUser
}



}