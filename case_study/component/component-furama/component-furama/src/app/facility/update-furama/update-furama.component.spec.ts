import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuramaComponent } from './update-furama.component';

describe('UpdateFuramaComponent', () => {
  let component: UpdateFuramaComponent;
  let fixture: ComponentFixture<UpdateFuramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFuramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
