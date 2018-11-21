import { Component, OnInit } from '@angular/core';
import {ServicesAppService} from '../../services-app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {


  private formGroup: FormGroup;
  private hide: boolean;

  constructor(private service: ServicesAppService,  private route: Router) {
    this.formGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contra: new FormControl('', [Validators.required, Validators.pattern(
        '^(?=.*\\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\\S{8,16}$'
      )])
    });
    this.hide = true;
  }

  ngOnInit() {
  }

  register() {
    if(this.formGroup.valid){
      this.service.registerUser(this.formGroup.value).then(()=>{
        this.formGroup = new FormGroup({});
        return this.route.navigate(['/login']);
      }).catch((error) => console.log((error)));
    }
  }

  cancel() {
    return this.route.navigate(['/']);
  }



}
