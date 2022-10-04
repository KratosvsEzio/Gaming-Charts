import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from '@app/core/footer/footer.component';
import { HeaderComponent } from '@app/core/header/header.component';
import { LayoutComponent } from '@app/core/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule) },
    ]
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreModule { }
