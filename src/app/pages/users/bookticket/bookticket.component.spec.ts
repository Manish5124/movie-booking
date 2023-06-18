import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketComponent } from './bookticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookticketComponent', () => {
  let component: BookticketComponent;
  let fixture: ComponentFixture<BookticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{ provide: MatDialogRef,
        useValue: {}}
      , { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }],
        
      declarations: [BookticketComponent],
      imports:[MatDialogModule,HttpClientModule,MatFormFieldModule,MatCardModule,BrowserModule,
        ReactiveFormsModule,BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule, FormsModule ,
        MatInputModule,
        MatDialogModule,  
        ]
   
    });
    fixture = TestBed.createComponent(BookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title "Book ticket"', () => {

    const fixer = TestBed.createComponent(BookticketComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("Book ticket");
  });
});
