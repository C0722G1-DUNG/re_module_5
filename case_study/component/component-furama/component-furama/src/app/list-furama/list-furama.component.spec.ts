import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuramaComponent } from './list-furama.component';

describe('ListFuramaComponent', () => {
  let component: ListFuramaComponent;
  let fixture: ComponentFixture<ListFuramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFuramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
