import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdeLanguagePage } from './rde-language.page';

describe('RdeLanguagePage', () => {
  let component: RdeLanguagePage;
  let fixture: ComponentFixture<RdeLanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdeLanguagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdeLanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
