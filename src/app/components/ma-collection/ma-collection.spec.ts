import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaCollectionComponent } from './ma-collection.component';
import { CollectionService } from '../../services/collection.service';

describe('MaCollectionComponent', () => {
  let component: MaCollectionComponent;
  let fixture: ComponentFixture<MaCollectionComponent>;
  let collectionServiceSpy: jasmine.SpyObj<CollectionService>;

  beforeEach(async () => {
    collectionServiceSpy = jasmine.createSpyObj('CollectionService', ['getCollection', 'supprimerCarte']);
    collectionServiceSpy.getCollection.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [MaCollectionComponent],
      providers: [
        { provide: CollectionService, useValue: collectionServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MaCollectionComponent);
    component = fixture.componentInstance;
  });

  it('doit créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('doit charger la collection', () => {
    component.ngOnInit();
    expect(collectionServiceSpy.getCollection).toHaveBeenCalled();
  });
});
