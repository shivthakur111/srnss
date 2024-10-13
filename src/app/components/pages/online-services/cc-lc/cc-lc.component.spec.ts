import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcLcComponent } from './cc-lc.component';

describe('CcLcComponent', () => {
  let component: CcLcComponent;
  let fixture: ComponentFixture<CcLcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcLcComponent]
    });
    fixture = TestBed.createComponent(CcLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
