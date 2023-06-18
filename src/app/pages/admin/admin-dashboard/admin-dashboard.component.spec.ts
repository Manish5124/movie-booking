import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MoviesCardsComponent } from '../movies-cards/movies-cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardComponent,MoviesCardsComponent],
      imports:[MatDialogModule,HttpClientModule,MatFormFieldModule,MatCardModule,BrowserModule,
        ReactiveFormsModule,BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule, FormsModule ,SlickCarouselModule
        ]
    });
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have title "AdminDashboardComponent"', () => {

    const fixer = TestBed.createComponent(AdminDashboardComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("AdminDashboardComponent");
  });
  
});
