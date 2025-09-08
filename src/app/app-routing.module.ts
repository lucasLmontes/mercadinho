import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promo', component: PromocaoComponent },
  { path: 'produtos/:categoria', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
