import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)},
  ]}
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
