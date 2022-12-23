import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFuramaComponent } from './create-furama.component';

describe('CreateFuramaComponent', () => {
  let component: CreateFuramaComponent;
  let fixture: ComponentFixture<CreateFuramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFuramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
