import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent implements OnInit {

roupas:any = [
  {
    img:'assets/camisas/Camisa Férias Figuras e Estilos.png',
    produto: 'Camisa Férias Figuras e Estilos'
  },
  {
    img:'assets/camisas/Camisa Férias Figuras e Estilos 2.png',
    produto: 'Camisa Férias Figuras e Estilos 2'
  },
  {
    img:'assets/camisas/Camisa Férias Listrada.png',
    produto: 'Camisa Férias Listrada'
  },
  {
    img:'assets/camisas/Camisa Férias Penas.png',
    produto: 'Camisa Férias Penas'
  },
  {
    img:'assets/camisas/Camisa Férias Xadres.png',
    produto: 'Camisa Férias Xadres'
  },
  {
    img:'assets/camisas/Camisa ocasional simples bege.png',
    produto: 'Camisa ocasional simples bege'
  },
  {
    img:'assets/camisas/Camisa ocasional simples Cinza.png',
    produto: 'Camisa ocasional simples Cinza'
  },
  {
    img:'assets/camisas/Camisa ocasional simples Rosa Quente.png',
    produto: 'Camisa ocasional simples Rosa Quente'
  },
  {
    img:'assets/camisas/Plantas férias Masculina.png',
    produto: 'Plantas férias Masculina'
  },
  {
    img:'assets/camisas/Plantas férias Masculina 2.png',
    produto: 'Plantas férias Masculina 2'
  },
  {
    img:'assets/camisas/Camisa ocasional simples verde.png',
    produto: 'Camisa ocasional simples verde'
  },
  {
    img:'assets/camisas/Camisa ocasional simples Verde Oliva.png',
    produto: 'Camisa ocasional simples Verde Oliva'
  },
  {
    img:'assets/camisas/Camisa ocasional simples Salmão.png',
    produto: 'Camisa ocasional simples Salmão'
  },
  {
    img:'assets/camisas/Camisa ocasional simples preta.png',
    produto: 'Camisa ocasional simples preta'
  },
  {
    img:'assets/camisas/Camisa ocasional simples Marron Chocolate.png',
    produto: 'Camisa ocasional simples Marron Chocolate'
  },

]
  constructor() { }

  ngOnInit(): void {
  }

}
