import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosdetailComponent } from './usuariosdetail.component';

describe('UsuariosdetailComponent', () => {
  let component: UsuariosdetailComponent;
  let fixture: ComponentFixture<UsuariosdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
