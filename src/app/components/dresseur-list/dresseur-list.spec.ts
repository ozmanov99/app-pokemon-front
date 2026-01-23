import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DresseurListComponent } from './dresseur-list.component';
import { DresseurService } from '../../services/dresseur.service';
import { of } from 'rxjs';

describe('DresseurListComponent', () => {
  let component: DresseurListComponent;
  let fixture: ComponentFixture<DresseurListComponent>;
  let dresseurServiceSpy: jasmine.SpyObj<DresseurService>;

  beforeEach(async () => {
    dresseurServiceSpy = jasmine.createSpyObj('DresseurService', ['getAll', 'delete']);

    await TestBed.configureTestingModule({
      declarations: [DresseurListComponent],
      providers: [
        { provide: DresseurService, useValue: dresseurServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DresseurListComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit charger les dresseurs', () => {
    dresseurServiceSpy.getAll.and.returnValue(of([]));
    component.loadDresseurs();
    expect(dresseurServiceSpy.getAll).toHaveBeenCalled();
  });
});
