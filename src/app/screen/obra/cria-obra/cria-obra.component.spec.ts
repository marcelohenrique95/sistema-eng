import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaObraComponent } from './cria-obra.component';

describe('CriaObraComponent', () => {
  let component: CriaObraComponent;
  let fixture: ComponentFixture<CriaObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
