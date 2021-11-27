import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esportivas',
  templateUrl: './esportivas.component.html',
  styleUrls: ['./esportivas.component.css']
})
export class EsportivasComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/esportivas/Camiseta esportiva masculina azul.png',
      produto: 'Camiseta esportiva masculina azul'
    },
    {
      img:'assets/esportivas/Desportivo T-shirt corrida.png',
      produto: 'Desportivo T-shirt corrida'
    },
    {
      img:'assets/esportivas/Regata esportiva.png',
      produto: 'Regata esportiva'
    },
    {
      img:'assets/esportivas/Shorts camuflado areia.png',
      produto: 'Shorts camuflado areia'
    },
    {
      img:'assets/esportivas/Shorts desportivo.png',
      produto: 'Shorts desportivo'
    },
    {
      img:'assets/esportivas/Shorts desportivo 2.png',
      produto: 'Shorts desportivo 2'
    },
    {
      img:'assets/esportivas/Shorts desportivo 3.png',
      produto: 'Shorts desportivo 3'
    },
    {
      img:'assets/esportivas/Shorts desportivo verde.png',
      produto: 'Shorts desportivo verde'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
