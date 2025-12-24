
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in the toolbar', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // trigger initial render
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleEl = compiled.querySelector('.title') as HTMLElement | null;

    expect(titleEl).toBeTruthy(); // ensure the element exists
    expect(titleEl!.textContent?.trim()).toContain('To‑Do List (CI/CD Demo)');
  });
});
