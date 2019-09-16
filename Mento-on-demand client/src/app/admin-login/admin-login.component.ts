import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { Router } from '@angular/router';
import { MentorService } from '../Mentor.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username: String;
  password: String;
  invalidLogin: boolean = false;
  admin: Admin[];

  constructor(private router: Router, private mentorService: MentorService) { }

  ngOnInit() {
    
  }
  checkLogin() {
    
      if (this.username === "Admin" && this.password === "admin123") {
        console.log("this.username");
        this.router.navigate(['admin-details']);
        this.invalidLogin = false;
       
        
      } else {
        this.invalidLogin = true;
      }
    }
  
  
  
  
  onSubmit() {
    console.log(this.username);
    this.checkLogin();
    
  }
  

}




