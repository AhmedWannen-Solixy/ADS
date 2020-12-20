import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChauffeurMenu2Page } from './chauffeur-menu2.page';

describe('ChauffeurMenu2Page', () => {
  let component: ChauffeurMenu2Page;
  let fixture: ComponentFixture<ChauffeurMenu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurMenu2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChauffeurMenu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
