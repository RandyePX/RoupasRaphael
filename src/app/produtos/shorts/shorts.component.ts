import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/shorts/Shorts bolso bloco de cores marrom.png',
      produto: 'Shorts bolso bloco de cores marrom'
    },
    {
      img:'assets/shorts/Shorts bolso bloco de cores meio a meio.png',
      produto: 'Shorts bolso bloco de cores meio a meio'
    },
    {
      img:'assets/shorts/Shorts bolso quadriculado.png',
      produto: 'Shorts bolso quadriculado'
    },
    {
      img:'assets/shorts/Shorts bolso simples.png',
      produto: 'Shorts bolso simples'
    },
    {
      img:'assets/shorts/Shorts bolso simples 2.png',
      produto: 'Shorts bolso simples 2'
    },
    {
      img:'assets/shorts/Shorts bolso simples 3.png',
      produto: 'Shorts bolso simples 3'
    },
    {
      img:'assets/shorts/Shorts bolso simples holográfico.png',
      produto: 'Shorts bolso simples holográfico'
    },
    {
      img:'assets/shorts/Shorts bolso simples holográfico 2.png',
      produto: 'Shorts bolso simples holográfico 2'
    },
    {
      img:'assets/shorts/Shorts street preto.png',
      produto: 'Shorts street preto'
    },
    {
      img:'assets/shorts/Shorts desenho animado.png',
      produto: 'Shorts desenho animado'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
