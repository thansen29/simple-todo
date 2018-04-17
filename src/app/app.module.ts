import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { reducers } from './store/app.reducer';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-container/todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TaskViewComponent } from './todo-container/task-view/task-view.component';
import { TodoItemComponent } from './todo-container/todo-list/todo-item/todo-item.component';
import { DropdownComponent } from './header/dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoContainerComponent,
    TaskViewComponent,
    TodoItemComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
