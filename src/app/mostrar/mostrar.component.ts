import { Component, OnInit } from '@angular/core';
import { ApiService } from '../model/api.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  deputados: any[];
  deputado: any;

  constructor(private recServ:ApiService) { 
    this.deputados = [];
  }

  ngOnInit() {
    this.contatos();
  }

  contatos(){
    this.recServ.recebe_dep().subscribe(dados => (this.deputados = dados['dados']));
  }

  pesquisa_id(pesquisa:number){
    this.recServ.recebe_id(pesquisa).subscribe(dados => (this.deputado = dados['dados']));
  }

}
