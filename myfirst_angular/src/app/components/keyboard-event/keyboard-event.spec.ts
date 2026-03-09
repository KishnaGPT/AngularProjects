import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEvent } from './keyboard-event';

describe('KeyboardEvent', () => {
  let component: KeyboardEvent;
  let fixture: ComponentFixture<KeyboardEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
