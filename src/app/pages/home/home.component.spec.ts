import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from '../../../app/components/partials/carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardsComponent } from 'src/app/components/partials/movie-cards/movie-cards.component';
import { PremierCardsComponent } from 'src/app/components/partials/premier-cards/premier-cards.component';

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      declarations: [HomeComponent,CarouselComponent,MovieCardsComponent,PremierCardsComponent],
      imports:[MatDialogModule,HttpClientModule,MatFormFieldModule,MatCardModule,BrowserModule,
        ReactiveFormsModule,BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule, FormsModule ,SlickCarouselModule,
        ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
