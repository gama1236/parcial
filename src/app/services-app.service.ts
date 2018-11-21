import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {auth} from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class ServicesAppService {

  constructor( private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) { }

  /**
   * Metodo para registrar un usuario
   * @param user 
   */
  registerUser(user) {
    if (typeof(user) === 'object') {
      return new Promise((resolve, reject) => {
        const {correo, contra} = user;
        this.afDatabase.list('users').push(user);
        this.registerUser(user);
        this.afAuth.auth.createUserWithEmailAndPassword(correo, contra)
          .then( userData => resolve(userData),
            err => reject(err));
      });
    }
   }

   /**
    * Metodo para loguear 
    * @param user 
    */

   login(user) {
     if (typeof (user) === 'object') {
       return new Promise((resolve, reject) => {
          const {correo, contra} = user;
          
          this.afAuth.auth.signInWithEmailAndPassword(correo, contra)
          .then( userData => resolve(userData),
          err => reject(err));
       });
     }
    }
    

    /**
     * 
     *  
     */
    loginFacebook() {
      return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    } 

    loginGoogle() {
      return new Promise((resolve, reject) => {
        const provider = new auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth.signInWithPopup(provider).then((response)=>{
          console.log('ha pasado: ' + response);
        }).catch((error)=>{
          console.log(error);
        })
      })
    }
    
}
