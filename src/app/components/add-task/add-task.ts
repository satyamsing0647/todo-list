import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-add-task',
  imports: [
    CommonModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {

 @Output() addTask = new EventEmitter<string>();
 title = '';

 submit(): void {
   const t = this.title.trim();
   if (!t) return;
   this.addTask.emit(t);
   this.title = '';
 }

}
