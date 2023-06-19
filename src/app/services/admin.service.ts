import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../models/users';


const Movie_API = "http://localhost:9000/api/v1";
//  const Movie_API = "http://54.186.174.225:9000/api/v1";
//  const Movie_API = "https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/movie";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const headers = {'content-type':'application/json'};


 
@Injectable({
  providedIn: 'root'
})
export class AdminService {

   movies$ = new Subject<any>;
 
  constructor(private httpClient:HttpClient) { }


   
  getAllMovies():Observable<any>
  {
   return this.httpClient.get(Movie_API+'/getlAllMovies',{'headers':headers,responseType: 'json'});
  // return this.httpClient.get(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/movie`,{'headers':headers,responseType: 'json'});
  
  } 

  addMovie(movie:any):Observable<any>{
    // const headers = new HttpHeaders().set('Authorization',token);
    // const body = JSON.stringify(loginData);
    // console.log(body)
    return this.httpClient.post(Movie_API+'/addMovie',movie,{responseType: 'json'});
    // return this.httpClient.post(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/movie`,movie,{'headers':headers,responseType: 'json'});

  }
  
  getData()
  {
    this.getAllMovies().subscribe((res:any)=>{
      
      this.movies$.next(res);
       console.log("movie data is =",res);

    });    

  }
    
  filterData(data:any)
  {
      this.getAllMovies().subscribe((res:any)=>{
      
        let text = data.toLowerCase();

      let arr = res.filter((e:any)=>e.movieName.toLowerCase().includes(text) || e.theaterName.toLowerCase().includes(text) );
        
        
        this.movies$.next(arr);
       console.log("filter is =",res);
      // console.log("movie data is =",this.movies);
 
    });    

  }


  deleteMovieById(id:any):Observable<any>
  {
   return this.httpClient.delete(Movie_API+'/delete/'+`${id}`,{responseType:'text' }); 
  // return this.httpClient.delete(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/movie/`+`${id}`,{'headers':headers,responseType:'text' });
  }

  updateMovie(id:any,newdata:any):Observable<any>
  {
    return this.httpClient.put(Movie_API+'/updateMovie/'+`${id}`,newdata,{responseType: 'text'});   
    // return this.httpClient.put(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/moviedata/`+`${id}`,newdata,{'headers':headers,responseType: 'text'});

  }  

  getAllTicketsById(id:any):Observable<any>
  {
    return this.httpClient.get(Movie_API+'/getAllTicket/'+`${id}`,{'headers':headers,responseType: 'json'});
    // return this.httpClient.get(` https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/ticket/`+`${id}`,{'headers':headers,responseType: 'json'});
  }

  deleteTicketsById(id:any):Observable<any>
  {    
    return this.httpClient.delete(Movie_API+'/deleteTicketsById/'+`${id}`,{responseType:'text' });
       // return this.httpClient.delete(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/deleteticketsbymovieid/`+`${id}`,{'headers':headers,responseType:'text' });  
  }

  addTicket(data:any):Observable<any>
  {  
    return this.httpClient.post(Movie_API+'/addticket',data,{responseType: 'json'});

    // return this.httpClient.post(`https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/bookmovie`,data,{'headers':headers,responseType: 'json'});
  }

  
  getMovieById(id:any):Observable<any>
  {
    
    // return this.httpClient.get(` https://03sul3fnff.execute-api.us-west-2.amazonaws.com/DeploymentMovie/getmovie/`+`${id}`,{responseType: 'json'});
    return this.httpClient.get(Movie_API+'/getMovieById/'+`${id}`,{responseType: 'json'});

  }

}
