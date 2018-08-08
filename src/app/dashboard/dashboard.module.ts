import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DhomeComponent } from './dhome/dhome.component';
import { DbookComponent } from './dbook/dbook.component';
import { DchatComponent } from './dchat/dchat.component';
import { DprofileComponent } from './dprofile/dprofile.component';
import { DmusicComponent } from './dmusic/dmusic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ChartComponent } from './dhome/chart/chart.component';
import { FormsModule } from '@angular/forms';
import { DchomeComponent } from './dchome/dchome.component';
import { DctrackComponent } from './dctrack/dctrack.component';
import { DctipComponent } from './dctip/dctip.component';
import { DquesComponent } from './dques/dques.component';
import { DcbookComponent } from './dcbook/dcbook.component';
import { ChatfeedComponent } from './dchat/chatfeed/chatfeed.component';
import { ChatformComponent } from './dchat/chatform/chatform.component';
import { ChatlistComponent } from './dchat/chatlist/chatlist.component';
import { ChatmsgComponent } from './dchat/chatmsg/chatmsg.component';
import { UserGuard } from '../authguard/user.guard';
import { CouncellerGuard } from '../authguard/counceller.guard';
import { GuageComponent } from './dhome/guage/guage.component';
import { InfoComponent } from './dhome/info/info.component';
import { TipsComponent } from './dhome/tips/tips.component';
import { UseritemComponent } from './dchat/useritem/useritem.component';



const childRoutes:Routes = [
  {path:'dhome',component:DhomeComponent,canActivate:[UserGuard]},
  {path:'dbook',component:DbookComponent,canActivate:[UserGuard]},
  {path:'dchat',component:DchatComponent},
  {path:'dprofile',component:DprofileComponent},
  {path:'dmusic',component:DmusicComponent,canActivate:[UserGuard]},
  {path:'dchome',component:DchomeComponent,canActivate:[CouncellerGuard]},
  {path:'dctip',component:DctipComponent,canActivate:[CouncellerGuard]},
  {path:'dctrack',component:DctrackComponent,canActivate:[CouncellerGuard]},
  {path:'dcbook',component:DcbookComponent,canActivate:[CouncellerGuard]},
  {path:'dques',component:DquesComponent,canActivate:[UserGuard]}
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(childRoutes),
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey:
      'AIzaSyB9qQh5Mw4MhnsSs0RCYxzPBZZrNvDhHl8'
      
    })
  ],
  declarations: [
  DhomeComponent,
  DbookComponent,
  DchatComponent,
  DprofileComponent,
  DmusicComponent,
  ChartComponent,
  DchomeComponent,
  DctrackComponent,
  DctipComponent,
  DquesComponent,
  DcbookComponent,
  ChatfeedComponent,
  ChatformComponent,
  ChatlistComponent,
  ChatmsgComponent,
  GuageComponent,
  InfoComponent,
  TipsComponent,
  UseritemComponent
  ]
})
export class DashboardModule { }
