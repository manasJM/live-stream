import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  googleClientId = '822051958083-mp3anh7elnegkgabcsagl2dnss7917cv.apps.googleusercontent.com';
  googleApiScope = [
    'https://www.googleapis.com/auth/youtube'
  ].join(' ');

  googleAuth: any;

  constructor(private router: Router,
              private zone: NgZone) {

    // intialize google client i.e the app 
     gapi.load('auth2', () => {
         gapi.auth2.init({
           client_id: this.googleClientId,
           scope: this.googleApiScope
        });
        this.googleAuth = gapi.auth2.getAuthInstance();
    });
  }

  /**
   * Starts the Auth 2.0 flow to login the user
   */
  login() {
    this.googleAuth.signIn().then(res => {
      let googleUser = this.googleAuth.currentUser.get();
        localStorage.setItem('token', googleUser.getAuthResponse().access_token);
          this.router.navigate(['liveStream']);
    });
  }
}
