import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EchangeListComponent } from './echange-list.component';
import { EchangeService } from '../../services/echange.service';
import { of } from 'rxjs';

describe('EchangeListComponent', () => {
  let component: EchangeListComponent;
  let fixture: ComponentFixture<EchangeListComponent>;
  let echangeServiceSpy: jasmine.SpyObj<EchangeService>;

  beforeEach(async () => {
    echangeServiceSpy = jasmine.createSpyObj('EchangeService', ['getAll', 'accepter', 'refuser']);

    await TestBed.configureTestingModule({
      declarations: [EchangeListComponent],
      providers: [
        { provide: EchangeService, useValue: echangeServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EchangeListComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit charger les échanges', () => {
    echangeServiceSpy.getAll.and.returnValue(of([]));
    component.loadEchanges();
    expect(echangeServiceSpy.getAll).toHaveBeenCalled();
  });
});
