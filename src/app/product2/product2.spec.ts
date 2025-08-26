import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2 } from './product2';

describe('Product2', () => {
  let component: Product2;
  let fixture: ComponentFixture<Product2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Product2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
