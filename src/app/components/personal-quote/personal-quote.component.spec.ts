import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalQuoteComponent } from './personal-quote.component';

describe('PersonalQuoteComponent', () => {
  let component: PersonalQuoteComponent;
  let fixture: ComponentFixture<PersonalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
