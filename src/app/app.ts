import { Component, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AddTask } from './components/add-task/add-task';
import { ActiveList } from './components/active-list/active-list';
import { HistoryList } from './components/history-list/history-list';



@Component({
  selector: 'app-root',
  imports: [

CommonModule,
MatToolbarModule,
MatTabsModule,
MatIconModule,
MatSnackBarModule,
// child components
AddTask,
ActiveList,
HistoryList,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('to-do-list');
  active$!: Observable<Todo[]>;
  completed$!: Observable<Todo[]>;

  constructor(private svc: TodoService, private snack: MatSnackBar) {
    this.active$ = svc.active$;
    this.completed$ = svc.completed$;
  }

  addTask(title: string) {
    try {
      this.svc.add(title);
      this.snack.open('Task added', 'Close', { duration: 1500 });
    } catch {
      this.snack.open('Title cannot be empty', 'Close', { duration: 1500 });
    }
  }

  markDone(t: Todo) {
    this.svc.markDone(t.id);
    this.snack.open('Marked as done', 'Close', { duration: 1200 });
  }

  undo(t: Todo) {
    this.svc.undo(t.id);
    this.snack.open('Moved back to active', 'Close', { duration: 1200 });
  }

  remove(t: Todo) {
    this.svc.remove(t.id);
    this.snack.open('Task deleted', 'Close', { duration: 1200 });
  }

  clearCompleted() {
    this.svc.clearCompleted();
    this.snack.open('Cleared completed', 'Close', { duration: 1500 });
  }

}
