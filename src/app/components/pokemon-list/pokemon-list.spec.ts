import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj('PokemonService', ['getMyPokemons', 'openBoosterByType']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;

    // Simuler tous les ViewChild pour éviter les erreurs "nativeElement undefined
    component.lightEau = { nativeElement: { querySelector: () => ({ style: { opacity: '' } }) } } as any;
    component.lightFeu = { nativeElement: { querySelector: () => ({ style: { opacity: '' } }) } } as any;
    component.lightElec = { nativeElement: { querySelector: () => ({ style: { opacity: '' } }) } } as any;
    component.lightPlante = { nativeElement: { querySelector: () => ({ style: { opacity: '' } }) } } as any;
    component.lightVol = { nativeElement: { querySelector: () => ({ style: { opacity: '' } }) } } as any;
  });

  it('doit rediriger vers login si non connecté', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('doit charger les Pokémon si connecté', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    pokemonServiceSpy.getMyPokemons.and.returnValue(of([]));
    component.ngOnInit();
    expect(pokemonServiceSpy.getMyPokemons).toHaveBeenCalled();
  });

  it('doit ouvrir un booster Eau', () => {
    pokemonServiceSpy.openBoosterByType.and.returnValue(of([]));
    component.ouvrirBooster('Eau');
    expect(pokemonServiceSpy.openBoosterByType).toHaveBeenCalledWith('Eau');
  });

  it('doit ouvrir un booster Feu', () => {
    pokemonServiceSpy.openBoosterByType.and.returnValue(of([]));
    component.ouvrirBooster('Feu');
    expect(pokemonServiceSpy.openBoosterByType).toHaveBeenCalledWith('Feu');
  });

  it('doit ouvrir un booster Électrik', () => {
    pokemonServiceSpy.openBoosterByType.and.returnValue(of([]));
    component.ouvrirBooster('Électrik');
    expect(pokemonServiceSpy.openBoosterByType).toHaveBeenCalledWith('Électrik');
  });

  it('doit ouvrir un booster Plante', () => {
    pokemonServiceSpy.openBoosterByType.and.returnValue(of([]));
    component.ouvrirBooster('Plante');
    expect(pokemonServiceSpy.openBoosterByType).toHaveBeenCalledWith('Plante');
  });

  it('doit ouvrir un booster Vol', () => {
    pokemonServiceSpy.openBoosterByType.and.returnValue(of([]));
    component.ouvrirBooster('Vol');
    expect(pokemonServiceSpy.openBoosterByType).toHaveBeenCalledWith('Vol');
  });
});
