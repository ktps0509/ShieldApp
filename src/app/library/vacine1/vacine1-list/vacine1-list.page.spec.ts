import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vacine1ListPage } from './vacine1-list.page';

describe('Vacine1ListPage', () => {
  let component: Vacine1ListPage;
  let fixture: ComponentFixture<Vacine1ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vacine1ListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vacine1ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
