
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
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleEl = compiled.querySelector('.title') as HTMLElement | null;

    expect(titleEl).toBeTruthy();

    // Accept "To‑Do List (CI/CD Demo)" OR "To‑Do List (CI/CD Demo v<number>)"
    const text = titleEl!.textContent?.trim() ?? '';
    expect(text).toMatch(/^To‑Do List \(CI\/CD Demo(?: v\d+)?\)$/);
    // If you want to be even more relaxed:
    // expect(text.includes('To‑Do List (CI/CD Demo')).toBeTrue();
  });
});
