import { Component } from '@angular/core';
import { LoginAppService } from './login-app.service';
import { User } from './user';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {
    title = 'app';
    private loginName;
    private loginPass;

    constructor( private loginService: LoginAppService ) {

    }

    doLogin(): void {
        let user: User;
        user.uname = this.loginName;
        user.upass = this.loginPass;
        this.loginService.doLogin( user ).subscribe(
            o => {
                console.log( o ),
                    err => {
                        console.log( 'error occured' ),
                            () => { console.log( 'Successfully logged in' ) }
                    }
            }
        );
    }
}
