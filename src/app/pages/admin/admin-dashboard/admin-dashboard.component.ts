import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

    title = "AdminDashboardComponent";
  searchText:string="";

  constructor(public dialog: MatDialog,private service:AdminService) {}

  search(){
      console.log(this.searchText);
      this.service.filterData(this.searchText);
      
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
// })
// export class DialogContentExampleDialog {}