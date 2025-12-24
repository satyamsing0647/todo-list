import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';



@Component({
  selector: 'app-history-list',
  imports: [
CommonModule,
FormsModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatIconModule,
MatListModule,
MatDividerModule,


  ],
  templateUrl: './history-list.html',
  styleUrl: './history-list.css',
})
export class HistoryList {

@Input() items: Todo[] = [];
@Output() undo = new EventEmitter<Todo>();
@Output() remove = new EventEmitter<Todo>();
@Output() clearAll = new EventEmitter<void>();

trackById(_: number, t: Todo) { return t.id; }

}
