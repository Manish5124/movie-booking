import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../models/users';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  title = "signup";
  SignupForm: FormGroup = new FormGroup({});
  user!: Users;

  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router) {}

  ngOnInit() {
    this.user = new Users(); // Create a new instance of the Users class or assign a value from somewhere
    if (this.user) {
      this.initializeForm();
    }
    
  }

  initializeForm() {
    this.SignupForm = this.formBuilder.group({
      username: [this.user?.username, Validators.required],
      password: [this.user?.password, Validators.required],
      email: [this.user?.email, [Validators.required, Validators.email]],
      petName: [this.user?.petName],
      role: [this.user?.role, Validators.required],
    });
  }
  
  submit(){
    console.log(this.SignupForm.value);
    this.authService.createUser(this.SignupForm.value).subscribe(data=>{
      console.log(data);
     
      var Toas= Swal.mixin({ toast: true,position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,didOpen: (toast) => {   toast.addEventListener('mouseenter', Swal.stopTimer) 
     toast.addEventListener('mouseleave', Swal.resumeTimer) } }) 

     Toas.fire({ icon: 'success', title: 'Signed in successfully' })
     this.router.navigate(['/login']);
    },
    (error)=>{
      var Toas= Swal.mixin({ toast: true,position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,didOpen: (toast) => {   toast.addEventListener('mouseenter', Swal.stopTimer) 
        toast.addEventListener('mouseleave', Swal.resumeTimer) } }) 

    Toas.fire({
      title:'Wrong Credential',
      icon:'error'
    });
    })
  }




  // SignupForm = this.fb.group({
  //   username:['',Validators.required],
  //   password:['',Validators.required],
  //   email:['',Validators.required],
  //   petName:['',Validators.required],
  //   role:['',Validators.required]
  // });

  // constructor(private fb:FormBuilder){}
 

  // submitForm()
  // {
  //   console.log(this.SignupForm.value);
  // }
}
