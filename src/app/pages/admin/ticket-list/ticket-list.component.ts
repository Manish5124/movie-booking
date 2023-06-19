import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import Swal from 'sweetalert2';

@Component({
  
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

    title = "Ticket-list-component"
  // ticketsData:Tickets = new Tickets();
  ticketsData: Array<any> = [];
  id:any;
  flag!:boolean;

  constructor(private service:AdminService,private dialogRef: MatDialogRef<UpdateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.id = data;
    }
  
    displayedColumns: string[] = ['Movie Id','Ticket Id', 'User Name', 'Movie Name', 'Theater Name','bookedSeats','Delete'];
    dataSource = this.ticketsData;

  ngOnInit(): void {
    this.getTicketData();
  }


    getTicketData(){
      this.service.getAllTicketsById(this.id)
    .subscribe((res:any)=>{
      
          this.ticketsData = res; 
          if(this.ticketsData.length<1)
          {
            this.flag = false;
          }
          else
          {
            this.flag = true;
          }
      console.log("getticketslist =>",this.ticketsData);
    });
    }
  deleteById(id:any)
  {

    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete the ticket. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete operation
        this.service.deleteTicketsById(id).subscribe(res=>{
          console.log("delete ticket by id=>",res);
          this.getTicketData();
        });
      }
      });
    
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}

