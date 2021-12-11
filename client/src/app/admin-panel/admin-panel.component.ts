import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login/admin-login/admin-login.service'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    public adminLoginService:AdminLoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // Logout
  logOut(){
    this.adminLoginService.logout()
    this.router.navigate(['admin'])
    return false
  }

}
