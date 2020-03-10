import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VactravelPage } from './vactravel.page';

describe('VactravelPage', () => {
  let component: VactravelPage;
  let fixture: ComponentFixture<VactravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VactravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VactravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
