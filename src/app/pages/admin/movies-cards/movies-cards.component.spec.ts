import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCardsComponent } from './movies-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('MoviesCardsComponent', () => {
  let component: MoviesCardsComponent;
  let fixture: ComponentFixture<MoviesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesCardsComponent],
      imports:[HttpClientModule,ReactiveFormsModule,MatDialogModule,SlickCarouselModule]
   
    });
    fixture = TestBed.createComponent(MoviesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title "movie card component"', () => {

    const fixer = TestBed.createComponent(MoviesCardsComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("movie card component");
  });
});
