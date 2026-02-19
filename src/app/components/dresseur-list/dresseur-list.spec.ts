import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DresseurListComponent } from './dresseur-list.component';
import { DresseurService } from '../../services/dresseur.service';
import { of, throwError } from 'rxjs';
import { Dresseur } from '../../models/dresseur.model';

describe('DresseurListComponent', () => {
  let component: DresseurListComponent;
  let fixture: ComponentFixture<DresseurListComponent>;
  let dresseurServiceMock: any;

  const mockDresseur: Dresseur = {
    id: 1,
    nom: 'Ketchum',
    pseudo: 'PikachuFan',
    photoUrl: 'assets/images/sacha.png',
    niveau: 10,
    role: 'dresseur'
  };

  beforeEach(async () => {
    dresseurServiceMock = {
      getMyProfile: jasmine.createSpy('getMyProfile').and.returnValue(of(mockDresseur))
    };

    await TestBed.configureTestingModule({
      declarations: [DresseurListComponent],
      providers: [{ provide: DresseurService, useValue: dresseurServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(DresseurListComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit charger le profil du dresseur au démarrage', () => {
    component.ngOnInit();
    expect(dresseurServiceMock.getMyProfile).toHaveBeenCalled();
    expect(component.dresseur).toEqual(mockDresseur);
  });

  it('doit gérer une erreur de chargement du profil', () => {
    dresseurServiceMock.getMyProfile.and.returnValue(throwError(() => new Error('Erreur')));
    spyOn(console, 'error');
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith('Erreur chargement profil', jasmine.any(Error));
  });
});
