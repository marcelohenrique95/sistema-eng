import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuObraComponent } from './menu-obra.component';

describe('MenuObraComponent', () => {
  let component: MenuObraComponent;
  let fixture: ComponentFixture<MenuObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
