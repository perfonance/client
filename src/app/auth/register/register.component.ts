import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {NotificationService} from "../../services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private authService: AuthService,
              private tokenService: TokenStorageService,
              private notificationService: NotificationService,
              private router: Router,
              private formBuilder: FormBuilder)
  {
    if (this.tokenService.getUser()) {
      this.router.navigate(['/']); //можно поставить main или index
    }
  }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
  }

  submitDataToServer(): void {
    this.authService.login({
      email: this.registerForm.value.email,
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
    }).subscribe(data => {
        console.log(data);
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);
        this.notificationService.showSnackBar('Successful authorization');
        this.router.navigate(['/']);
        window.location.reload();
      }
      , error => {
        console.log(error);
        this.notificationService.showSnackBar(error.message);
      })
  }
}
