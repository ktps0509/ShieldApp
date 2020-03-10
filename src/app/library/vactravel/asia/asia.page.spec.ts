import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsiaPage } from './asia.page';

describe('AsiaPage', () => {
  let component: AsiaPage;
  let fixture: ComponentFixture<AsiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
