import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { IndexComponent } from './index/index.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CompletedTrainingsComponent } from './completed-trainings/completed-trainings.component';
import { OnprogressTrainingsComponent } from './onprogress-trainings/onprogress-trainings.component';
import { ResponseForProposalsComponent } from './response-for-proposals/response-for-proposals.component';
import { MentorProposalsComponent } from './mentor-proposals/mentor-proposals.component';
import { SearchMentorComponent } from './search-mentor/search-mentor.component';
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';


const routes: Routes = [
   { path: '',redirectTo :'index',pathMatch:'full'},
   { path: 'index', component: IndexComponent },
   { path: 'admin-login', component: AdminLoginComponent },
   { path: 'mentor-login',  component: MentorLoginComponent },
   { path: 'user-details',  component: UserDetailsComponent },  
   { path: 'admin-details',  component: AdminDetailsComponent },
    {path:'login', component:LoginComponent },
    {path:'user-login',component:UserLoginComponent},
   { path: 'mentor-proposals',  component: MentorProposalsComponent},
   {path: 'completed-trainings',  component: CompletedTrainingsComponent }, 
   { path: 'onprogress-trainings',  component: OnprogressTrainingsComponent},
   { path: 'response-for-proposals',  component: ResponseForProposalsComponent},
   { path: 'search-mentor',  component: SearchMentorComponent},
   { path: 'user-signup',  component: UserSignupComponent},
   { path: 'mentor-signup',  component: MentorSignupComponent},
   { path: 'mentor-details',  component: MentorDetailsComponent,  
  children: [
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }

