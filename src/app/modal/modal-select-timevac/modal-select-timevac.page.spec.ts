import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSelectTimevacPage } from './modal-select-timevac.page';

describe('ModalSelectTimevacPage', () => {
  let component: ModalSelectTimevacPage;
  let fixture: ComponentFixture<ModalSelectTimevacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectTimevacPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSelectTimevacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
