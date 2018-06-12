import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { AzureB2cService } from 'tlahui-webapi-client';

@Component({
  selector: 'app-b2c-login',
  templateUrl: './b2c-login.component.html',
  styleUrls: ['./b2c-login.component.scss']
})

export class B2cLoginComponent implements OnInit {
  private _router: Router;
  private _auth: AzureB2cService;

  constructor(router: Router, auth: AzureB2cService) {
    this._router = router;
    this._auth = auth;
  }

  ngOnInit() {
// Call authhelper, determine if user is logged in, if not redirect to login
if (this._auth.isOnline()) {
      this._router.navigate(['/sample']);
    } else {
      this.login();
    }
  }

  login() {
    this._auth.login();
  }

}
