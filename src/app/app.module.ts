import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { BotFoundPageComponent } from './componentes/bot-found-page/bot-found-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MapsComponent} from './componentes/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { BannerComponent } from './componentes/banner/banner.component';

const config = {
  apiKey: 'AIzaSyCSMb__305MmosYSC4L0XbMsqguH0wqi8E',
  authDomain: 'proyectofinal-86e94.firebaseapp.com',
  databaseURL: 'https://proyectofinal-86e94.firebaseio.com',
  projectId: 'proyectofinal-86e94',
  storageBucket: 'proyectofinal-86e94.appspot.com',
  messagingSenderId: '888855670144'
};

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'maps', component: MapsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    BotFoundPageComponent,
    MapsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
