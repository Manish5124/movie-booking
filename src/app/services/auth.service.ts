import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../models/users';

const user_API = "http://localhost:8084/auth/v1";
// 
// const user_API = "http://34.213.58.119:8084/auth/v1";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const headers = {'content-type':'application/json'};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  isLoggedIn$ = new Subject<boolean>();
  userData$ = new Subject<any>();
  
  constructor(private httpClient:HttpClient) { }

  SetToken(token:any)
  {
    // localStorage.clear();
    localStorage.setItem('token',token);
    
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  createUser(user: Users):Observable<Object>{

    const body = JSON.stringify(user);
    console.log(body)
    return this.httpClient.post<Object>(user_API+'/register',body,{'headers':headers,responseType:'text' as 'json'});
    // return this.httpClient.post<Object>(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/user`,body,{'headers':headers,responseType:'text' as 'json'});
  }

  generateToken(user: any){
    const body = JSON.stringify(user);
    console.log(body)
      return this.httpClient.post(user_API+'/login',body,{'headers':headers,responseType:'text' as 'json'})
      // return this.httpClient.post(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/userlogin`,body,{'headers':headers,responseType:'text' as 'json'})

    }

    getUserData(username:any,password:any):Observable<any>
    {
      return this.httpClient.get(user_API+'/getUser?username='+`${username}`+'&password='+`${password}`,{'headers':headers})
      
      // return this.httpClient.get(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/userlogin?username=`+username+'&password='+password,{'headers':headers,responseType:'text'});
    }



  forgotPassword(petName:any,username:any,newPassword:any):Observable<any>
  {
    return this.httpClient.post(user_API+'/forgotPassword?petName='+petName+'&username='+username+'&newPassword='+newPassword,{'headers':headers,responseType:'text' as 'json'})
    // return this.httpClient.post(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/forgotpassword?petName=`+petName+'&username='+username+'&newPassword='+newPassword,{'headers':headers,responseType:'text' as 'json'})
  }
}



