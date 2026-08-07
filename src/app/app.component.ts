import { Component } from '@angular/core';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaprodutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaprodutos.component';
}
