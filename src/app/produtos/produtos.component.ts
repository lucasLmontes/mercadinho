import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {
  categoria: string = '';
  produtos: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoria = params.get('categoria') || '';

      //Placeholder de produtos (só carnes por enquanto)
      if (this.categoria === 'carnes') {
        this.produtos = [
          {
            nome: 'Picanha Premium',
            preco: 'R$ 79,90/kg',
            descricao:
              'Corte selecionado, macio e saboroso para o seu churrasco.',
            imagem:
              'https://png.pngtree.com/png-clipart/20240308/original/pngtree-brazilian-picanha-raw-meat-png-image_14542900.png',
          },
          {
            nome: 'Filé de Peito de Frango',
            preco: 'R$ 21,90/kg',
            descricao: 'Frango fresco, ideal para o dia a dia.',
            imagem:
              'https://static.vecteezy.com/system/resources/previews/041/454/582/non_2x/ai-generated-a-piece-of-raw-chicken-breast-isolated-on-transparent-background-free-png.png',
          },
        ];
      } else {
        this.produtos = [];
      }
    });
  }
}
