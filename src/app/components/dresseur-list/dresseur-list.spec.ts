import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurList } from './dresseur-list';

describe('DresseurList', () => {
  let component: DresseurList;
  let fixture: ComponentFixture<DresseurList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DresseurList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DresseurList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
