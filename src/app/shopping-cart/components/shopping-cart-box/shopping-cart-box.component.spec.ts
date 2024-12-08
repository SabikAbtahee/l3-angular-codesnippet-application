import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBoxComponent } from './shopping-cart-box.component';

describe('ShoppingCartBoxComponent', () => {
  let component: ShoppingCartBoxComponent;
  let fixture: ComponentFixture<ShoppingCartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
