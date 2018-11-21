import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFoundPageComponent } from './bot-found-page.component';

describe('BotFoundPageComponent', () => {
  let component: BotFoundPageComponent;
  let fixture: ComponentFixture<BotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
