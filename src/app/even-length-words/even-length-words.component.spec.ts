import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenLengthWordsComponent } from './even-length-words.component';

describe('EvenLengthWordsComponent', () => {
  let component: EvenLengthWordsComponent;
  let fixture: ComponentFixture<EvenLengthWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenLengthWordsComponent]
    });
    fixture = TestBed.createComponent(EvenLengthWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
