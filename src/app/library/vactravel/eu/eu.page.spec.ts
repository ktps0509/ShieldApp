import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EuPage } from './eu.page';

describe('EuPage', () => {
  let component: EuPage;
  let fixture: ComponentFixture<EuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
