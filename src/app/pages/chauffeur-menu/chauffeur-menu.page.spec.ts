import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChauffeurMenuPage } from './chauffeur-menu.page';

describe('ChauffeurMenuPage', () => {
  let component: ChauffeurMenuPage;
  let fixture: ComponentFixture<ChauffeurMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChauffeurMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
