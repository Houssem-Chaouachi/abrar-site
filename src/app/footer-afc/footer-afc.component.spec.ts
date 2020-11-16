import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAfcComponent } from './footer-afc.component';

describe('FooterAfcComponent', () => {
  let component: FooterAfcComponent;
  let fixture: ComponentFixture<FooterAfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
