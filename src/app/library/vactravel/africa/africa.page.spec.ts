import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfricaPage } from './africa.page';

describe('AfricaPage', () => {
  let component: AfricaPage;
  let fixture: ComponentFixture<AfricaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
