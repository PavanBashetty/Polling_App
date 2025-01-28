import { Routes } from '@angular/router';
import { PollComponent } from './components/poll/poll.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'poll', pathMatch:'full'},
    {path:'poll', component:PollComponent},
    {path:'**', component:PageNotFoundComponent}
];
