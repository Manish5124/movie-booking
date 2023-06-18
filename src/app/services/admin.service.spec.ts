import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
 
it('should return movies data', () => {
    let mockData = [
      {
        id: 1,
        movieName: 'WAR',
        theaterName: 'INOX',
        movieImage: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA2LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359415-zatymwvbqj-portrait.jpg',
        moviePrice: 320
      },
      {
        id: 2,
        movieName: 'RRR',
        theaterName: 'PVR',
        movieImage: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA2LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359415-zatymwvbqj-portrait.jpg',
        moviePrice: 500
      }
    ];

    spyOn(service, 'getAllMovies').and.returnValue(of(mockData));
    service.getAllMovies().subscribe(response => {
      expect(response).toEqual(mockData);
    });
  });

  it('should return getMovieByid data', () => {
    let mockData = [
      {
        id: 1,
        movieName: 'WAR',
        theaterName: 'INOX',
        movieImage: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA2LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359415-zatymwvbqj-portrait.jpg',
        moviePrice: 320
      },
      {
        id: 2,
        movieName: 'RRR',
        theaterName: 'PVR',
        movieImage: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA2LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359415-zatymwvbqj-portrait.jpg',
        moviePrice: 500
      }
    ];

    spyOn(service, 'getMovieById').and.returnValue(of(mockData));
    service.getMovieById(1).subscribe(response => {
      expect(response).toEqual(mockData);
    });
  });

  it('should return Ticket data', () => {
    let mockData = [
      {
        "transactionId": 1,
        "movieName": "IRON-MAN",
        "theaterName": "PVR",
        "bookedSeats": 100,
        "username": "manish",
        "movie_fk": 1
      },
      {
        "transactionId": 2,
        "movieName": "IRON-MAN",
        "theaterName": "PVR",
        "bookedSeats": 100,
        "username": "Rahul",
        "movie_fk": 1
      }
    ];

    spyOn(service, 'getAllTicketsById').and.returnValue(of(mockData));
    service.getAllTicketsById(1).subscribe(response => {
      expect(response).toEqual(mockData);
    });
  });
  

  

});
