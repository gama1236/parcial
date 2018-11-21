import { Component, OnInit } from '@angular/core';
import {ServicesAppService} from '../../services-app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private formGroup: FormGroup;
  private hide: boolean;
  constructor(private serviceApp: ServicesAppService, private routes: Router) {
    this.formGroup = new FormGroup({
      correo: new FormControl('', [Validators.email, Validators.required]),
      contra: new FormControl('', [Validators.required])
    });
    this.hide = true;
  }

  ngOnInit() {
  }

  login() {
    if(this.formGroup.valid) {
      const user = this.formGroup.value;
      this.serviceApp.login(user).then(() => {
        this.formGroup = new FormGroup({});
        return this.routes.navigate(['/maps']);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  loginGoogle(){
    this.serviceApp.loginGoogle();
  }

}
