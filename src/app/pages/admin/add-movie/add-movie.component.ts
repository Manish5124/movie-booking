import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movies } from 'src/app/models/movies';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{

  title = "AddMovieComponent";
  movie: Movies =new  Movies();

  constructor(private service:AdminService,private fb:FormBuilder){}

  ngOnInit(): void {

  }

  addMovieForm = this.fb.group({
    movieName:[''],
    movieImage:[''],
    theaterName:[''],
    moviePrice:['']
    });
     
    submitForm()
    {
      // console.log(this.addMovieForm.value);

      this.service.addMovie(this.addMovieForm.value).subscribe(response=>{
        console.log("add movie response=>",response);
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'success',
         title: 'Movie is created succesfully!!',
         showConfirmButton: false,timer: 1500 })
        this.service.getData();
      },
      (error)=>{
        console.log("error in add movie",error);
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'error',
         title: 'Movie is not created!!',
         showConfirmButton: false,timer: 1500 })

      })
    }

}
