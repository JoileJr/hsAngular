import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormProfissional } from './dialog-form-profissional.component';

describe('DialogFormProfissional', () => {
  let component: DialogFormProfissional;
  let fixture: ComponentFixture<DialogFormProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogFormProfissional]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormProfissional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
