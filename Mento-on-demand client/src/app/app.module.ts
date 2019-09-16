import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { StorageServiceModule} from 'angular-webstorage-service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { IndexComponent } from './index/index.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CompletedTrainingsComponent } from './completed-trainings/completed-trainings.component';
import { OnprogressTrainingsComponent } from './onprogress-trainings/onprogress-trainings.component';
import { MentorProposalsComponent } from './mentor-proposals/mentor-proposals.component';
import { MentorApprovalComponent } from './mentor-approval/mentor-approval.component';
import { ResponseForProposalsComponent } from './response-for-proposals/response-for-proposals.component';
import { SearchMentorComponent } from './search-mentor/search-mentor.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    UserDetailsComponent,
    MentorDetailsComponent,
    MentorLoginComponent,
    IndexComponent,
    AdminDetailsComponent,
    CompletedTrainingsComponent,
    OnprogressTrainingsComponent,
    MentorProposalsComponent,
    MentorApprovalComponent,
    ResponseForProposalsComponent,
    SearchMentorComponent,
    LoginComponent,
    UserLoginComponent,
    MentorSignupComponent,
    UserSignupComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // StorageServiceModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,  
  ],
//  providers: [StorageServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
