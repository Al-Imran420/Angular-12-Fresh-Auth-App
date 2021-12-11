import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  // Loader seetings
  loader: boolean = false;
  isLoading: boolean = false;
  success: boolean = false;
  failure: boolean = false;
  loader_message: string = '';

  inputValidationText: string = '';

  hide: boolean = false;

  public user = {
    'username': '',
    'password': '',
  }

  constructor(
    public adminLoginService: AdminLoginService,
    public router: Router) {
    this.inputValidationText = ''
  }

  ngOnInit() {
    setInterval(() => {
      this.loader = false;
      this.isLoading = false;
      this.success = false;
      this.failure = false;
      this.loader_message = '';
    }, 5000)
  }

  login() {
    if (this.user.username && this.user.password) {
      this.loader = true;
      this.isLoading = true;
      this.adminLoginService.authenticateUser(this.user).subscribe(data => {
        // console.log(data);
        if (data.success) {
          this.adminLoginService.storeUserData(data.token, data.user);
          setTimeout(() => {
            this.router.navigate(['/add_product']);
          }, 2000);
          this.loader_message = 'Login Success!';
          this.success = true;
          this.isLoading = false;
        } else {
          this.loader_message = 'Something went wrong! Please check your user name and password.';
          this.failure = true;
          this.isLoading = false;
        }
      })
    } else {
      if (this.user.username == '') {
        this.inputValidationText = 'Please Give Valid User Name'
      } else {
        this.inputValidationText = 'Please Give Valid Pasword'
      }
    }
    console.log(this.user)
  }

}
