import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DresseurFormComponent } from './dresseur-form.component';
import { DresseurService } from '../../services/dresseur.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DresseurFormComponent', () => {
  let component: DresseurFormComponent;
  let fixture: ComponentFixture<DresseurFormComponent>;
  let dresseurServiceSpy: jasmine.SpyObj<DresseurService>;

  beforeEach(async () => {
    dresseurServiceSpy = jasmine.createSpyObj('DresseurService', ['get', 'create', 'update']);

    await TestBed.configureTestingModule({
      declarations: [DresseurFormComponent],
      providers: [
        { provide: DresseurService, useValue: dresseurServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '0' } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DresseurFormComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });
});
