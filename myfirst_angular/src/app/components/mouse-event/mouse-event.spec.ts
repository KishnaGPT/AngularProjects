import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEvent } from './mouse-event';

describe('MouseEvent', () => {
  let component: MouseEvent;
  let fixture: ComponentFixture<MouseEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
