import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AusPage } from './aus.page';

describe('AusPage', () => {
  let component: AusPage;
  let fixture: ComponentFixture<AusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
