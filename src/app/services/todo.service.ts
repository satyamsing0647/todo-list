
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Todo } from '../models/todo';

const STORAGE_KEY = 'todos-v1';

function genId(): string {
  // Random ID (works in all browsers)
  return (crypto as any)?.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly _todos$ = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todos$.asObservable();

  // Derived streams for UI binding
  readonly active$ = this.todos$.pipe(map(list => list.filter(t => !t.done)));
  readonly completed$ = this.todos$.pipe(map(list => list.filter(t => t.done)));

  constructor() { this.load(); }

  add(title: string): Todo {
    const trimmed = title.trim();
    if (!trimmed) throw new Error('Title cannot be empty');
    const t: Todo = {
      id: genId(),
      title: trimmed,
      done: false,
      createdAt: Date.now(),
    };
    this._todos$.next([t, ...this._todos$.value]);
    this.save();
    return t;
  }

  markDone(id: string): void {
    this._todos$.next(
      this._todos$.value.map(t => t.id === id ? { ...t, done: true, completedAt: Date.now() } : t)
    );
    this.save();
  }

  undo(id: string): void {
    this._todos$.next(
      this._todos$.value.map(t => t.id === id ? { ...t, done: false, completedAt: undefined } : t)
    );
    this.save();
  }

  remove(id: string): void {
    this._todos$.next(this._todos$.value.filter(t => t.id !== id));
    this.save();
  }

  clearCompleted(): void {
    this._todos$.next(this._todos$.value.filter(t => !t.done));
    this.save();
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._todos$.value));
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: Todo[] = raw ? JSON.parse(raw) : [];
      // sort: newest first for active, then by completedAt for history rendering convenience
      parsed.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      this._todos$.next(parsed);
    } catch {
      this._todos$.next([]);
    }
  }
}
