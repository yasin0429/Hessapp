import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SifreUnuttumComponent } from './sifre-unuttum.component';

describe('SifreUnuttumComponent', () => {
  let component: SifreUnuttumComponent;
  let fixture: ComponentFixture<SifreUnuttumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SifreUnuttumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SifreUnuttumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
