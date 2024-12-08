import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconTextComponent } from './app-icon-text.component';

describe('AppIconTextComponent', () => {
  let component: AppIconTextComponent;
  let fixture: ComponentFixture<AppIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppIconTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
