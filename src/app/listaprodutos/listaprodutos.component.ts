import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listaprodutos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaprodutos.component.html',
  styleUrl: './listaprodutos.component.css'
})
export class ListaprodutosComponent {

  produtos: string[] = [
    '1 - Pão - 4,50',
    '1 - Manteiga - 16,00',
    '1 - Café - 12,80'
  ];

  adicionarProduto() {
    const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
    const valor = (document.getElementById('valor') as HTMLInputElement).value;

    if (descricao === '' || valor === '') {
      alert('Preencha todos os campos!');
      return;
    }

    this.produtos.push(`1 - ${descricao} - ${valor}`);
  }

  limparTudo() {
    this.produtos = [];
  }
}