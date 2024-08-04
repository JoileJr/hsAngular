import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormPersonagemComponent } from './dialog-form-personagem.component';

describe('DialogFormPersonagemComponent', () => {
  let component: DialogFormPersonagemComponent;
  let fixture: ComponentFixture<DialogFormPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormPersonagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
