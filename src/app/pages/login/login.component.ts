import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Role:any;
  login: any;
  form;
  constructor(fb: FormBuilder,private authService:AuthService,private router:Router,public dialog: MatDialog) {
    this.form = fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    });

  }

  ngOnInit() {
  
  }

  openForgotPop()
  {
    const dialogRef = this.dialog.open(ForgotPasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

    
  submit(){
    // console.log(this.form.value);
    this.authService.generateToken(this.form.value).subscribe(res=>{
      console.log("generate token res=>",res);
      let fieldValues = JSON.parse(res.toString());
      let keys = Object.keys(fieldValues)
      let values = keys.map(k => fieldValues[k])
      console.log(keys[1]) //=> ['key']
      console.log(values[1]) //=> ['value']

      // localStorage.setItem('token',"Bearer "+values[1]);
      // let currentToken = ;
      this.authService.SetToken(values[1]);
      // localStorage.setItem(isLoggedIn,true);
      // window.sessionStorage.setItem(Token_Key, token);

      this.authService.isLoggedIn$.next(true);
      this.authService.getUserData(this.form.value.username,this.form.value.password).subscribe((v)=>{
     
        console.log("user data is=>",v);
          let data = JSON.parse(v);
          this.authService.userData$.next(data);
          console.log("data id =",data);
        console.log("v.role => ",data.role);
        this.Role = data.role;


        Swal.fire({ 
          // position: 'top-end', 
        icon: 'success',
        title: 'logged in successfully',
        showConfirmButton: false,timer: 1500 })
        
        
        
        
        window.sessionStorage.setItem('user',JSON.stringify(v));
        localStorage.setItem('role',this.Role);
        if(this.Role=="ADMIN")
        {
          this.router.navigate(['/admin']);
             }
        else if(this.Role=="USER")
        {

          this.router.navigate(['/users']);
        }
      },
      (error)=>{ console.log(error);
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'error',
         title: 'Wrong Credential !!',
         showConfirmButton: false,timer: 1500 })
      })



      // this.authService.fetchRole(this.form.value.username,this.form.value.password).subscribe(role=>{
      //     console.log("role is=>",role);
      //   this.Role = role;
    //     localStorage.setItem('role',this.Role);
       
    //     // if(role=="ADMIN")
    //     {
    //       // this.router.navigate(['/admin']);
    //         //  }
    //     else if(role=="USER")
    //     {

    //       this.router.navigate(['/users']);
    //     }
    //     console.log("fetchRole is =>",this.Role)
        
    //     });
           
    // },
    // (error)=>{
    //   console.log("error=>",error);
    // }
    // )
  })
}

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  
  
  
  
  
  
  
  // loginForm = this.fb.group({
  //   username:['',Validators.required],
  //   password:['',Validators.required]
  // });

  // constructor(private fb:FormBuilder){}

  
  // submitForm()
  // {
  //   console.log(this.loginForm.value);
  // }
}
