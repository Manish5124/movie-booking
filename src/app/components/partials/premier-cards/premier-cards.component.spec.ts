import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierCardsComponent } from './premier-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('PremierCardsComponent', () => {
  let component: PremierCardsComponent;
  let fixture: ComponentFixture<PremierCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierCardsComponent],
      imports:[HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        BrowserAnimationsModule,SlickCarouselModule]
    });
    fixture = TestBed.createComponent(PremierCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
