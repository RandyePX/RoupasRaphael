import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/polo/Polo manga longa ocasional azul.png',
      produto: 'Polo manga longa ocasional azul'
    },
    {
      img:'assets/polo/Polo ocasional manga longa.png',
      produto: 'Polo ocasional manga longa'
    },
    {
      img:'assets/polo/Polo faixa central azul e amarela.png',
      produto: 'Polo faixa central azul e amarela'
    },
    {
      img:'assets/polo/Polo Zíper bloco de cores.png',
      produto: 'Polo Zíper bloco de cores'
    },
    {
      img:'assets/polo/Polo Zíper bloco de cores 2.png',
      produto: 'Polo Zíper bloco de cores 2'
    },
    {
      img:'assets/polo/Polo Zíper bloco de cores 3.png',
      produto: 'Polo Zíper bloco de cores 3'
    },
    {
      img:'assets/polo/Polo botão branco liso.png',
      produto: 'Polo botão branco liso'
    },
    {
      img:'assets/polo/Polo ocasional azul.png',
      produto: 'Polo ocasional azul'
    },
    {
      img:'assets/polo/Polo jogador baseball.png',
      produto: 'Polo jogador baseball'
    },
    {
      img:'assets/polo/Polo duas cores.png',
      produto: 'Polo duas cores'
    },
    {
      img:'assets/polo/Polo branco liso ocasional.png',
      produto: 'Polo branco liso ocasional'
    },
    {
      img:'assets/polo/Polo branca&azul ocasional.png',
      produto: 'Polo branca&azul ocasional'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
