import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClefNotesComponent } from './clef-notes/clef-notes.component';

const routes: Routes = [
  { path: 'clef', component: ClefNotesComponent },
  { path: '**', component: ClefNotesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
