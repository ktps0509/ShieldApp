import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vaccine10DetailPage } from './vaccine10-detail.page';

describe('Vaccine10DetailPage', () => {
  let component: Vaccine10DetailPage;
  let fixture: ComponentFixture<Vaccine10DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaccine10DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vaccine10DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
