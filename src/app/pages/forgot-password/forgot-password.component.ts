import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  implements OnInit  {

  title = 'ForgotPassword'
  form;
  constructor(fb: FormBuilder,private authService:AuthService)
  {
    this.form = fb.group({
      petName : ['',[Validators.required]],
      username : ['',[Validators.required]],
      newpassword : ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
   
  }

  submit(){
    this.authService.forgotPassword(this.form.value.petName,this.form.value.username,this.form.value.newpassword).subscribe(data=>{
      console.log("password updated successfully !!");
      Swal.fire({ 
        // position: 'top-end', 
      icon: 'success',
       title: 'password updated successfully !!',
       showConfirmButton: false,timer: 1500 })


    },
    (error)=>{
      console.log("wrong credential ",error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is not updated!',
      });
      // Swal.fire({ 
      //   // position: 'top-end', 
      // icon: 'error',
      //  title: 'password is not updated!!',
      //  showConfirmButton: false,timer: 1500 })
    })
  }


}
