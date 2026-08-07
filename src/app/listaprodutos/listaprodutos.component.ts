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

  produtos = [
    { descricao: 'Pão', valor: 4.50 },
    { descricao: 'Manteiga', valor: 16.00 },
    { descricao: 'Café', valor: 12.80 }
  ];

  indiceEditando: number | null = null;


  adicionarProduto() {

    const descricao = (document.getElementById('descricao') as HTMLInputElement).value;
    const valor = (document.getElementById('valor') as HTMLInputElement).value;

    if (descricao === '' || valor === '') {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.indiceEditando !== null) {

      this.produtos[this.indiceEditando] = {
        descricao: descricao,
        valor: Number(valor)
      };

      this.indiceEditando = null;

    } else {

      this.produtos.push({
        descricao: descricao,
        valor: Number(valor)
      });

    }

    this.limparCampos();
  }


  editarProduto(index: number) {

    const produto = this.produtos[index];

    const descricao = document.getElementById('descricao') as HTMLInputElement;
    const valor = document.getElementById('valor') as HTMLInputElement;

    descricao.value = produto.descricao;
    valor.value = produto.valor.toString();

    this.indiceEditando = index;
  }


  excluirProduto(index: number) {

    this.produtos.splice(index, 1);

    if (this.indiceEditando === index) {
      this.indiceEditando = null;
      this.limparCampos();
    }
  }


  limparTudo() {

    this.produtos = [];

    this.indiceEditando = null;

    this.limparCampos();
  }


  limparCampos() {

    const descricao = document.getElementById('descricao') as HTMLInputElement;
    const valor = document.getElementById('valor') as HTMLInputElement;

    descricao.value = '';
    valor.value = '';
  }

}