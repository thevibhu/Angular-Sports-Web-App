import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './shared/home.service';
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { MatchService } from './shared/match.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { PlayersComponnet } from './players/players.component';
import { PlayersService } from './shared/players.service';
import { PlayerThumbnailComponent } from './players/player-thumbnail.component';
import { TeamService } from './shared/team.service';
import { TeamComponent } from './team/team.component';
import { TeamThumbnailComponent } from './team/team-thumbhnail.component';
import { TeamThumbnailService } from './shared/team-thumbnail.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MatchComponent,
    LoginComponent,
    PlayersComponnet,
    PlayerThumbnailComponent,
    TeamComponent,
    TeamThumbnailComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HomeService,MatchService,LoginService,PlayersService,TeamService,TeamThumbnailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
