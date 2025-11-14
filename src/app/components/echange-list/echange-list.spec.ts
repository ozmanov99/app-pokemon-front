import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangeList } from './echange-list';

describe('EchangeList', () => {
  let component: EchangeList;
  let fixture: ComponentFixture<EchangeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EchangeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchangeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
