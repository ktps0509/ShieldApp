import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vaccine3DetailPage } from './vaccine3-detail.page';

describe('Vaccine3DetailPage', () => {
  let component: Vaccine3DetailPage;
  let fixture: ComponentFixture<Vaccine3DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaccine3DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vaccine3DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
