import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title = "headerComponent";
  isLogedin:boolean = false;
  panelOpenState = false;
  // userData: Array<any> = [];
  userData:Users = new Users();
  constructor(private router:Router,private authService:AuthService){}

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe(v=>{
      this.isLogedin = v;
    })
    this.authService.userData$.subscribe(v=>{
      // console.log("user data v=>",v);
      this.userData = v;
      console.log("header userdData=>",this.userData);
    })

    let useris = sessionStorage.getItem('user')
    if (useris!==null)
       this.authService.userData$.next(JSON.parse(useris));

    if(localStorage.getItem('token'))
    {
      this.authService.isLoggedIn$.next(true);
    }

       
  }
  

  logout()
  {
    Swal.fire({ 
      // position: 'top-end', 
    icon: 'success',
     title: 'logout successfully',
     showConfirmButton: false,timer: 1500 })
    localStorage.clear();
    this.authService.isLoggedIn$.next(false);
    sessionStorage.clear();
    this.router.navigate(['/']);
    
  }
  home()
  {
      if(localStorage.getItem('role')==="ADMIN")
      {
      this.router.navigate(['/admin']);
       }
    else if(localStorage.getItem('role')=="USER")
    {

      this.router.navigate(['/users']);
    }      

     }
 
  
}
