import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shard/home/home.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () =>
      import('./shard/shard.module').then((m) => m.ShardModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
