import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let http:HttpClient;
  
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(AuthService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  
  });

  it('should be match',()=>{
    expect(true).toBe(true);
  })
});
