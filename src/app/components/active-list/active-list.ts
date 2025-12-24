import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-active-list',
  imports: [


    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,

  ],
  templateUrl: './active-list.html',
  styleUrl: './active-list.css',
})
export class ActiveList {

  @Input() items: Todo[] = [];
  @Output() done = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  trackById(_: number, t: Todo) { return t.id; }

}
