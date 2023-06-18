import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movies } from 'src/app/models/movies';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  title= "Book ticket";
  movie:Movies = new Movies();
  id:any;
  public  ticketForm!: FormGroup;
  constructor(private service:AdminService,private fb:FormBuilder, private dialogRef: MatDialogRef<BookticketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.id = data;
    }
  ngOnInit(): void {
    this.service.getMovieById(this.id).subscribe(res=>{
      console.log("get movie by id=>",res);
      this.movie = res;
      console.log("get ths.movie by =>",this.movie);
        
    })
    this.ticketForm = this.fb.group({
     
      movieName:[this.movie.movieName],
      username:[''],
      theaterName:[this.movie.theaterName],
      bookedSeats:[this.movie.bookedSeats],
      movie_fk:[this.id],
      availableSeats:[this.movie.availableSeats] 
        });
    }

    submitForm(){
      this.ticketForm.controls['movieName'].setValue(this.movie.movieName);      
      this.ticketForm.controls['theaterName'].setValue(this.movie.theaterName);
      // console.log("ticket value =>",this.ticketForm.value);
      this.service.addTicket(this.ticketForm.value).subscribe(res=>{
        Swal.fire({ 
          // position: 'top-end', 
        icon: 'success',
         title: 'movie booked succesfully',
         showConfirmButton: false,timer: 1500 })

      },(error)=>{

         
      Swal.fire({ 
        // position: 'top-end', 
      icon: 'error',
       title: 'Movie is not booked !!',
       showConfirmButton: false,timer: 1500 })
      });
    }
     

 }

