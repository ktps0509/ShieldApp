import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NAPage } from './na.page';

describe('NAPage', () => {
  let component: NAPage;
  let fixture: ComponentFixture<NAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
