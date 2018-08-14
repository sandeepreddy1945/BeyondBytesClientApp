import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';

const loginUrl: string = 'http://localhost:8020/login'
@Injectable( {
    providedIn: 'root'
} )
export class LoginAppService {

    constructor( private httpClient: HttpClient ) {
    }

    doLogin( user: User ): Observable<User> {
        return this.httpClient.post<User>( loginUrl, JSON.stringify( user ) );
    }
}