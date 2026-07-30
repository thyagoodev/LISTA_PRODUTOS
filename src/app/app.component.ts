import { Component } from '@angular/core';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista_produtos';
}