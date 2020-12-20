import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RdeMenuPage } from './rde-menu.page';

describe('RdeMenuPage', () => {
  let component: RdeMenuPage;
  let fixture: ComponentFixture<RdeMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdeMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdeMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
