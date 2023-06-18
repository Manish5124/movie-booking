import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Movies } from 'src/app/models/movies';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  // movies: Array<any> = [];
  title = 'update-movie-details';
  movie:Movies = new Movies();
  id:any;
  // public  updateMovieForm!: FormGroup;
  constructor(private service:AdminService,private fb:FormBuilder, private dialogRef: MatDialogRef<UpdateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
        this.id = data;
    }

  updateMovieForm = this.fb.group({
       
        movieName:this.movie.movieName,
        movieImage:this.movie.movieImage,
        theaterName:this.movie.theaterName,
        moviePrice:this.movie.moviePrice
        });
    
      // console.log("update movie=>id ",this.updateMovieForm.value);   

    ngOnInit(): void {

      this.service.getMovieById(this.id).subscribe(res=>{
        console.log("get movie by id=>",res);
        this.movie = res;
        console.log("get ths.movie by =>",this.movie);
    
      })
      
  }   

 
  
  
  submitForm(){
    console.log("=>",this.updateMovieForm.value);
    if(this.updateMovieForm.value.movieName===null)
    {
      this.updateMovieForm.controls['movieName'].setValue(this.movie.movieName);
    }
    if(this.updateMovieForm.value.movieImage===null)
    {
      this.updateMovieForm.controls['movieImage'].setValue(this.movie.movieImage);
    }
    if(this.updateMovieForm.value.theaterName===null)
    {
      this.updateMovieForm.controls['theaterName'].setValue(this.movie.theaterName);
    } 
    if(this.updateMovieForm.value.moviePrice===null)
    {
      this.updateMovieForm.controls['moviePrice'].setValue(this.movie.moviePrice);
    } 
    
    // this.updateMovieForm.controls['movieName'].setValue(this.movie.movieName);      
    // this.updateMovieForm.controls['theaterName'].setValue(this.movie.theaterName);
    // this.updateMovieForm.controls['moviePrice'].setValue(this.movie.moviePrice);
      this.service.updateMovie(this.id,this.updateMovieForm.value).subscribe(res=>{
        console.log("successfully updated",res);
        this.service.getData();
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'success',
         title: 'Movie updated succesfully',
         showConfirmButton: false,timer: 1500 })
      },
      (error)=>{
        console.log("error in updating ",error);
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'error',
         title: 'Movie is not updated!!',
         showConfirmButton: false,timer: 1500 })
      })
  }
}
