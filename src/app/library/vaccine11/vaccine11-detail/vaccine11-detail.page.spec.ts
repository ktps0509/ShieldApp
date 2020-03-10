import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vaccine11DetailPage } from './vaccine11-detail.page';

describe('Vaccine11DetailPage', () => {
  let component: Vaccine11DetailPage;
  let fixture: ComponentFixture<Vaccine11DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaccine11DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vaccine11DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
