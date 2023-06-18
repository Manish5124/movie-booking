import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports:[HttpClientModule,ReactiveFormsModule,MatDialogModule,SlickCarouselModule]
   
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have title "CarouselComponent"', () => {

    const fixer = TestBed.createComponent(CarouselComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("CarouselComponent");
  });

  
});
