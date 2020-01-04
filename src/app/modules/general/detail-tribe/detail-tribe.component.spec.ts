import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTribeComponent } from './detail-tribe.component';

describe('DetailTribeComponent', () => {
  let component: DetailTribeComponent;
  let fixture: ComponentFixture<DetailTribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
