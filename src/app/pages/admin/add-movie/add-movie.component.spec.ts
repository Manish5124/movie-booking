import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieComponent } from './add-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMovieComponent],
      imports:[MatDialogModule,HttpClientModule,MatFormFieldModule,MatCardModule,BrowserModule,
        ReactiveFormsModule,BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule]
    });
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have title "AddMovieComponent"', () => {

    const fixer = TestBed.createComponent(AddMovieComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("AddMovieComponent");
  });
});
