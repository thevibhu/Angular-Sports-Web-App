import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponnet } from './players/players.component';
import { TeamComponent } from './team/team.component';


export const appRoutes:Routes  =[

    {path :'home',component:HomeComponent },
    {path:'match',component:MatchComponent},
    {path:'login',component:LoginComponent},
    {path:'players',component:PlayersComponnet},
    {path:'team',component:TeamComponent},
    {path : '',redirectTo:'/home',pathMatch:'full'}




]