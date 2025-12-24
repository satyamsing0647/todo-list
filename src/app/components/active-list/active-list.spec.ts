import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveList } from './active-list';

describe('ActiveList', () => {
  let component: ActiveList;
  let fixture: ComponentFixture<ActiveList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
