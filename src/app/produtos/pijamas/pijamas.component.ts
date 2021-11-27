import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pijamas',
  templateUrl: './pijamas.component.html',
  styleUrls: ['./pijamas.component.css']
})
export class PijamasComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/pijamas/Calça Natal ocasional.png',
      produto: 'Calça Natal ocasional'
    },
    {
      img:'assets/pijamas/Calça Xadres vermelha .png',
      produto: 'Calça Xadres vermelha'
    },
    {
      img:'assets/pijamas/Conjunto bolso inverno.png',
      produto: 'Conjunto bolso inverno'
    },
    {
      img:'assets/pijamas/Conjunto bolso simples.png',
      produto: 'Conjunto bolso simples'
    },
    {
      img:'assets/pijamas/Conjunto inverno Natal.png',
      produto: 'Conjunto inverno Natal'
    },
    {
      img:'assets/pijamas/Conjunto listrado botões.png',
      produto: 'Conjunto listrado botões'
    },
    {
      img:'assets/pijamas/Roupão verde de bolinha.png',
      produto: 'Roupão verde de bolinha'
    },
    {
      img:'assets/pijamas/Conjunto risco de giz azul.png',
      produto: 'Conjunto risco de giz azul'
    },
    {
      img:'assets/pijamas/Conjunto verão simples .png',
      produto: 'Conjunto verão simples '
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
