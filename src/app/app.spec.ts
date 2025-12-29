
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
    fixture.detectChanges();              // trigger initial render
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleEl = compiled.querySelector('.title') as HTMLElement | null;
    expect(titleEl).toBeTruthy();

    // Normalize unicode dashes to a simple ASCII hyphen for matching
    const raw = titleEl!.textContent ?? '';
    const text = raw
      .replace(/[\u2010\u2011\u2012\u2013\u2014]/g, '-')  // various hyphens/dashes → '-'
      .trim();

    // Accept:
    //   "To-Do List (CI/CD Demo)"
    //   "To-Do List (CI/CD Demo v1)"
    //   "To-Do List (CI/CD Demo V3)"  etc.
    const pattern = /^To-Do List \(CI\/CD Demo(?: ?[Vv]\d+)?\)$/i;
    expect(text).toMatch(pattern);

    // If you prefer even more relaxed matching, use:
    // expect(text.includes('To-Do List (CI/CD Demo')).toBeTrue();
  });
});
