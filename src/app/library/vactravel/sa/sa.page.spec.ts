import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SAPage } from './sa.page';

describe('SAPage', () => {
  let component: SAPage;
  let fixture: ComponentFixture<SAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
