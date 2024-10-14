import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventComponent } from './news-events.component';

describe('NewsEventsComponent', () => {
  let component: NewsEventComponent;
  let fixture: ComponentFixture<NewsEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsEventComponent]
    });
    fixture = TestBed.createComponent(NewsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
