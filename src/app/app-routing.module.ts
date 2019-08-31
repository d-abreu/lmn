import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrebleClefNotesComponent } from './treble-clef-notes/treble-clef-notes.component';

const routes: Routes = [
  { path: 'treble', component: TrebleClefNotesComponent },
  { path: '**', component: TrebleClefNotesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
