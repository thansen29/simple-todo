import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TaskViewComponent } from './todo-container/task-view/task-view.component';

const appRoutes: Routes = [
  { path: '', component: TodoContainerComponent, children: [
    { path: 'tasks/:id', component: TaskViewComponent },
  ] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
