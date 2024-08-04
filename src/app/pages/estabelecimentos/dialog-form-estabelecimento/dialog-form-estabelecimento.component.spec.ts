import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormEstabelecimentoComponent } from './dialog-form-estabelecimento.component';

describe('DialogFormEstabelecimentoComponent', () => {
  let component: DialogFormEstabelecimentoComponent;
  let fixture: ComponentFixture<DialogFormEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
