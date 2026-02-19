import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaCollectionComponent } from './ma-collection.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('MaCollectionComponent', () => {
  let component: MaCollectionComponent;
  let fixture: ComponentFixture<MaCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaCollectionComponent],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MaCollectionComponent);
    component = fixture.componentInstance;
  });

  // Vérifie que le composant se crée
  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  // Vérifie que le titre est affiché
  it('doit afficher le titre "Ma Collection"', () => {
    fixture.detectChanges(); // applique le template
    const compiled = fixture.nativeElement as HTMLElement;
    const titre = compiled.querySelector('.header-title')?.textContent;
    expect(titre).toContain('Ma Collection');
  });


});
