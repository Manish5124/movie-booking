import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierCardsComponent } from './premier-cards.component';

describe('PremierCardsComponent', () => {
  let component: PremierCardsComponent;
  let fixture: ComponentFixture<PremierCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierCardsComponent]
    });
    fixture = TestBed.createComponent(PremierCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
