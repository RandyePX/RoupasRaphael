import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saia',
  templateUrl: './saia.component.html',
  styleUrls: ['./saia.component.css']
})
export class SaiaComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/saia/Saia festa longa abertura lateral.png',
      produto: 'Saia festa longa abertura lateral'
    },
    {
      img:'assets/saia/Saia Nó abertura lateral preta.png',
      produto: 'Saia Nó abertura lateral preta'
    },
    {
      img:'assets/saia/Saia longa geométrica listrada.png',
      produto: 'Saia longa geométrica listrada'
    },
    {
      img:'assets/saia/Saia longa com botões.png',
      produto: 'Saia longa com botões'
    },
    {
      img:'assets/saia/Saia formal Xadres azul.png',
      produto: 'Saia formal Xadres azul'
    },
    {
      img:'assets/saia/Saia formal Xadres verde.png',
      produto: 'Saia formal Xadres verde'
    },
    {
      img:'assets/saia/Saia ocasional mini xadres rosa.png',
      produto: 'Saia ocasional mini xadres rosa'
    },
    {
      img:'assets/saia/Saia formal Xadres Black&White.png',
      produto: 'Saia formal Xadres Black&White'
    },
    {
      img:'assets/saia/Saia formal Xadres vermelha.png',
      produto: 'Saia formal Xadres vermelha'
    },
    {
      img:'assets/saia/Saia Verão florida.png',
      produto: 'Saia Verão florida'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
