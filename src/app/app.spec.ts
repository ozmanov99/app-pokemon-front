import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Test pour vérifier que le composant AppComponent est créé correctement
  it('doit créer le composant AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Vérifie que le composant existe
  });

  // Test pour vérifier que le titre affiché correspond bien à "PokéApp"
  it('doit afficher le titre correct', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Déclenche le cycle de détection des changements
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('PokéApp'); // Vérifie le contenu du h1
  });
});
