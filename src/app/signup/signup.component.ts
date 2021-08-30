import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup | any;;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      skills: [''],
      hobbies: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    let signupBody = {
      "firstName":this.f.firstName.value,
      "lastName":this.f.lastName.value,
      "email":this.f.email.value,
      "password": this.f.password.value,
      "phone":this.f.phone.value,
      "skills":this.f.skills.value,
      "hobbies":this.f.hobbies.value
  }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.profileService.userCreate(signupBody).subscribe(
      res => {
        localStorage.setItem('jwtToken', res.token);
        this.router.navigate(['/home']);
      },
      error => {
        console.log("Error", error);
        this.loading = false;
      })

  }

}
