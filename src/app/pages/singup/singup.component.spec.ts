import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupComponent } from './singup.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SingupComponent', () => {
  let component: SingupComponent;
  let fixture: ComponentFixture<SingupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingupComponent],
      imports:[HttpClientModule,ReactiveFormsModule,
        MatDialogModule,RouterModule,MatCardModule,
        MatFormFieldModule,MatInputModule,RouterTestingModule
        ,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(SingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should hava as title "signup"', () => {

    const fixer = TestBed.createComponent(SingupComponent);
    const check = fixer.componentInstance;
    expect(check.title).toEqual("signup");
  });

  it('should render title',()=>{
    const fixture = TestBed.createComponent(SingupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('SIGN-UP');
  });
  
});
