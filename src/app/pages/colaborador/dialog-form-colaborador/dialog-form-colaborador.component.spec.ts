import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormColaboradorComponent } from './dialog-form-colaborador.component';

describe('DialogFormColaboradorComponent', () => {
  let component: DialogFormColaboradorComponent;
  let fixture: ComponentFixture<DialogFormColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
