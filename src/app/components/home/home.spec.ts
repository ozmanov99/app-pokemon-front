import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '../../services/auth.service';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Mock AuthService
  const authServiceMock = {
    isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(false)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit afficher le message pour les visiteurs non connectés', () => {
    authServiceMock.isLoggedIn.and.returnValue(false); // visiteur
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Vérifie que le <h2> contient le bon texte
    const h2 = compiled.querySelector('h2')?.textContent;
    expect(h2).toContain('Bienvenue sur PokéApp !');
  });

  it('doit afficher le message pour un utilisateur connecté', () => {
    authServiceMock.isLoggedIn.and.returnValue(true); // connecté
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const p = compiled.querySelector('ng-template ~ p') || compiled.querySelector('p');
    expect(p?.textContent).toContain("Accueil de l’application. Sélectionnez une section dans le menu pour commencer.");
  });
});
