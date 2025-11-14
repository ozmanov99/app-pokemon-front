import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurForm } from './dresseur-form';

describe('DresseurForm', () => {
  let component: DresseurForm;
  let fixture: ComponentFixture<DresseurForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DresseurForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DresseurForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
