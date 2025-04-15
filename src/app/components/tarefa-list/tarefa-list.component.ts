import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';
import { NgFor } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css'],
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, MatSlideToggleModule],
})

export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefa = new FormControl('');
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.tarefaService.listar().subscribe(dados => this.tarefas = dados);
  }

  adicionar() {
    console.log(this.novaTarefa);
    if (this.novaTarefa.value) {
      const nova: Tarefa = { descricao: this.novaTarefa.value, concluida: false };
      this.tarefaService.salvar(nova).subscribe(() => {
        this.listar();
      });
    }
    this.novaTarefa.setValue('');
  }

  alternarStatus(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
    this.tarefaService.atualizar(tarefa).subscribe(() => this.listar());
  }

  remover(id: number) {
    this.tarefaService.deletar(id).subscribe(() => this.listar());
  }
}