import { Routes } from '@angular/router';
import { TodosFromSignalComponent } from './MyComponents/todos-from-signal/todos-from-signal.component';
import { AppComponent } from './app.component';
import { EditPageComponent } from './MyComponents/edit-page/edit-page.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent

    },
    {
        path:"signalTodos",
        component:TodosFromSignalComponent
    },
    {
        path:'edit/:id',
        component:EditPageComponent
    }
];
