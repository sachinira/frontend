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
import { DctrackComponent } from './dctrack/dctrack.component';
import { DchomeComponent } from './dchome/dchome.component';
import { DctipComponent} from './dctip/dctip.component';


const childRoutes:Routes = [
  {path:'',component:DhomeComponent},
  {path:'dhome',component:DhomeComponent},
  {path:'dbook',component:DbookComponent},
  {path:'dchat',component:DchatComponent},
  {path:'dprofile',component:DprofileComponent},
  {path:'dmusic',component:DmusicComponent},
  {path:'dchome',component:DchomeComponent},
  {path:'dctrack',component:DctrackComponent},
  {path:'dchat',component:DchatComponent},
  {path:'dprofile',component:DprofileComponent},
  {path:'dctip',component:DctipComponent},
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
  DctrackComponent,
  DchomeComponent,
  DctipComponent
  ]
})
export class DashboardModule { }
