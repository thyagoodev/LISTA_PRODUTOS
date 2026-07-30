import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {

  descricao_produto: string = '';
  valor_unitario: number = 0;

  listaItens: Item[] = [];

  addItem() {

    if (
      this.descricao_produto.trim() === '' ||
      this.valor_unitario <= 0
    ) {
      return;
    }

    const item = new Item();

    item.idProduto = this.listaItens.length + 1;
    item.descricaoProduto = this.descricao_produto;
    item.valorUnitario = this.valor_unitario;

    this.listaItens.push(item);

    this.descricao_produto = '';
    this.valor_unitario = 0;
  }

  limparTudo() {
    this.listaItens = [];
  }

  excluirItem(indice: number) {

    this.listaItens.splice(indice, 1);
  
  }

}