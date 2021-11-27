import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportivasComponent } from './esportivas.component';

describe('EsportivasComponent', () => {
  let component: EsportivasComponent;
  let fixture: ComponentFixture<EsportivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsportivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
