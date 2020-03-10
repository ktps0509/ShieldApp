import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vaccine9DetailPage } from './vaccine9-detail.page';

describe('Vaccine9DetailPage', () => {
  let component: Vaccine9DetailPage;
  let fixture: ComponentFixture<Vaccine9DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaccine9DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vaccine9DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
