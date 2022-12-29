import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionayAgeComponentComponent } from './dictionay-age-component.component';

describe('DictionayAgeComponentComponent', () => {
  let component: DictionayAgeComponentComponent;
  let fixture: ComponentFixture<DictionayAgeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionayAgeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionayAgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
