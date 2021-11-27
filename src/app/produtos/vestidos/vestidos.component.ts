import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vestidos',
  templateUrl: './vestidos.component.html',
  styleUrls: ['./vestidos.component.css']
})
export class VestidosComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/vestidos/Vestido babado nó gola.png',
      produto: 'Vestido babado nó gola'
    },
    {
      img:'assets/vestidos/Vestido babado nó gola 2.png',
      produto: 'Vestido babado nó gola 2'
    },
    {
      img:'assets/vestidos/Vestido babado nó gola 3.png',
      produto: 'Vestido babado nó gola 3'
    },
    {
      img:'assets/vestidos/Vestido babado nó gola 4.png',
      produto: 'Vestido babado nó gola 4'
    },
    {
      img:'assets/vestidos/Vestido estampa céu noturno.png',
      produto: 'Vestido estampa céu noturno'
    },
    {
      img:'assets/vestidos/Vestido bolinhas babado.png',
      produto: 'Vestido bolinhas babado'
    },
    {
      img:'assets/vestidos/Vestido Boho nó simples.png',
      produto: 'Vestido Boho nó simples'
    },
    {
      img:'assets/vestidos/Vestido corte fora simples.png',
      produto: 'Vestido corte fora simples'
    },
    {
      img:'assets/vestidos/Vestido estampado girassois.png',
      produto: 'Vestido estampado girassois'
    },
    {
      img:'assets/vestidos/Vestido Frutas&Vegetais rosa.png',
      produto: 'Vestido Frutas&Vegetais rosa'
    },
    {
      img:'assets/vestidos/Vestido tubo florzinha azul.png',
      produto: 'Vestido tubo florzinha azul'
    },
    {
      img:'assets/vestidos/Vestido tubo florzinha rosa.png',
      produto: 'Vestido tubo florzinha rosa'
    },

  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
