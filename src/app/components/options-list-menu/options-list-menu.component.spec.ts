import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsListMenuComponent } from './options-list-menu.component';

describe('OptionsListMenuComponent', () => {
  let component: OptionsListMenuComponent;
  let fixture: ComponentFixture<OptionsListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsListMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
