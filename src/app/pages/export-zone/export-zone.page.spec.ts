import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExportZonePage } from './export-zone.page';

describe('ExportZonePage', () => {
  let component: ExportZonePage;
  let fixture: ComponentFixture<ExportZonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportZonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExportZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
