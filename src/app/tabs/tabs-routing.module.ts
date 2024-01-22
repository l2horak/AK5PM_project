import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'numbers',
    component: TabsPage,
    children: [
      {
        path: 'random',
        loadChildren: () => import('../random/random.module').then(m => m.RandomPageModule)
      },
      {
        path: 'year',
        loadChildren: () => import('../year/year.module').then(m => m.YearPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: '',
        redirectTo: '/numbers/random',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/numbers/random',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
