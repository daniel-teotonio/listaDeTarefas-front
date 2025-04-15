import { Component } from '@angular/core';
import { TarefaListComponent } from './components/tarefa-list/tarefa-list.component';

@Component({
  selector: 'app-root',
  imports: [TarefaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarefas-front';
}
