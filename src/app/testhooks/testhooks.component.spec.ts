import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthooksComponent } from './testhooks.component';

describe('TesthooksComponent', () => {
  let component: TesthooksComponent;
  let fixture: ComponentFixture<TesthooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
