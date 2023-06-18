import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashboardComponent } from './users-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MoviesCardsComponent } from '../../admin/movies-cards/movies-cards.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('UsersDashboardComponent', () => {
  let component: UsersDashboardComponent;
  let fixture: ComponentFixture<UsersDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{ provide: MatDialogRef,
        useValue: {}}],
      declarations: [UsersDashboardComponent,MoviesCardsComponent],
      imports:[MatDialogModule,HttpClientModule,MatCardModule,BrowserModule,
        ReactiveFormsModule,BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule, FormsModule ,SlickCarouselModule
        ]
    });
    fixture = TestBed.createComponent(UsersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title "UserDashboard"', () => {

    const fixer = TestBed.createComponent(UsersDashboardComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("UserDashboard");
  });
});
