import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movies } from 'src/app/models/movies';
import { AdminService } from 'src/app/services/admin.service';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { BookticketComponent } from '../../users/bookticket/bookticket.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})
export class MoviesCardsComponent implements OnInit {

  title = "movie card component";
  // movies: Movies =new  Movies();
 flag:any;
  movies: Array<any> = [];
  movieData:Array<any> = [];
  constructor(private service:AdminService,public dialog: MatDialog){}
 
  ngOnInit(): void {

    this.service.getData();
    this.service.movies$.subscribe((v:any)=>{
      this.movies = v;
      console.log("movie cards",v)
    })
    // this.service.getAllMovies().subscribe((res:Array<any>)=>{
    //   console.log("movie data is =",res);
    //       this.movies = res; 
    //   // console.log("movie data is =",this.movies);
 
    // });

    if(localStorage.getItem('role')==="ADMIN")
      {
        this.flag=true;
       }
    else if(localStorage.getItem('role')=="USER")
    {
      this.flag=false;
      // this.router.navigate(['/users']);
    }
  }

  openDialog(id:any) {
  
    const dialogRef = this.dialog.open(UpdateMovieComponent,{
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openTicketList(id:any)
  {
    const dialogRef = this.dialog.open(TicketListComponent,{
    data:id
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  deleteMovie(id:any)
  {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete the movie. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete operation
        this.service.deleteMovieById(id).subscribe(res=>{
          this.service.getData();
        
        });
        
      }
    });
   }

  openBookTicket(id:any)
  {
    
    const dialogRef = this.dialog.open(BookticketComponent,{
      data:id
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 


  // movies = [
  //   {
  //     name: 'Movie 1',
  //     theater: 'Theater 1',
  //     price: '$10',
  //     image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAyMDguN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-tkhtzgpquv-portrait.jpg'
  //   },
  //   {
  //     name: 'Movie 2',
  //     theater: 'Theater 2',
  //     price: '$12',
  //     image: 'https://th.bing.com/th/id/OIP.iZ4hQlj3io_bfl7oA1_bUQHaK-?w=194&h=288&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  //   },
  //   {
  //     name: 'Movie 3',
  //     theater: 'Theater 3',
  //     price: '$12',
  //     image: 'https://th.bing.com/th/id/OIP.OGVZpS7cGCeeXGEyPkJhaAHaLH?w=194&h=291&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  //   },
  //   {
  //     name: 'Movie 7',
  //     theater: 'Theater 7',
  //     price: '$12',
  //     image: 'https://th.bing.com/th/id/OIP.OGVZpS7cGCeeXGEyPkJhaAHaLH?w=194&h=291&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  //   },

  //   // Add more movie objects as needed
  // ];

   
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
   
  // slickInit(e:any) {
  //   console.log('slick initialized');
  // }
     
  breakpoint(e:any) {
    console.log('breakpoint');
  }
     
  afterChange(e:any) {
    console.log('afterChange');
  }
     
  beforeChange(e:any) {
    console.log('beforeChange');
  }



  
  
  // localStorage.getItem('Role')
}


