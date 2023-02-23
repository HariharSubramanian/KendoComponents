import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsListMenuComponent } from './components/options-list-menu/options-list-menu.component';

const routes: Routes = [
  { path: '', component: OptionsListMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
