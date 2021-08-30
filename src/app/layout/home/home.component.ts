import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  skills: string = '';
  hobbies: string = '';
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this.profileService.getUserInfo().subscribe(
      res => {
        console.log("Response for profile", res);
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.email = res.email;
        this.phone = res.phone;
        this.skills = res.skills;
        this.hobbies = res.hobbies;
      },
      err => {
        console.log("Error for profile", err);
      }
    )
  }

  navigateTo(){
    console.log("hajskdhf lkashdf lkja sldfkj");
    this.router.navigate(['/login']);
  }

}
