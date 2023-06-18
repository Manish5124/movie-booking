import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateMovieComponent } from './update-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UpdateMovieComponent', () => {
  let component: UpdateMovieComponent;
  let fixture: ComponentFixture<UpdateMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{ provide: MatDialogRef,
        useValue: {}}
      , { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }],
        
      declarations: [UpdateMovieComponent],
      imports:[HttpClientModule, BrowserModule,MatFormFieldModule,
        MatInputModule, ReactiveFormsModule,BrowserAnimationsModule, MatDialogModule, SlickCarouselModule]
    });
    fixture = TestBed.createComponent(UpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title "update-movie-details"', () => {

    const fixer = TestBed.createComponent(UpdateMovieComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("update-movie-details");
  });
});
