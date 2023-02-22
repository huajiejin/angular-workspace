import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundLibComponent } from './playground-lib.component';

describe('PlaygroundLibComponent', () => {
  let component: PlaygroundLibComponent;
  let fixture: ComponentFixture<PlaygroundLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
