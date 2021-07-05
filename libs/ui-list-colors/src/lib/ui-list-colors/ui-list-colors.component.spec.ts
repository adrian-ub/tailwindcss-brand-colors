import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListColorsComponent } from './ui-list-colors.component';

describe('UiListColorsComponent', () => {
  let component: UiListColorsComponent;
  let fixture: ComponentFixture<UiListColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiListColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiListColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
