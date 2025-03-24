import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationProductPage } from './creation-product.page';

describe('CreationProductPage', () => {
  let component: CreationProductPage;
  let fixture: ComponentFixture<CreationProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
