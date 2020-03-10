import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vaccine6DetailPage } from './vaccine6-detail.page';

describe('Vaccine6DetailPage', () => {
  let component: Vaccine6DetailPage;
  let fixture: ComponentFixture<Vaccine6DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaccine6DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vaccine6DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
