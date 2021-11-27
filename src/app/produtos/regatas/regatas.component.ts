import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regatas',
  templateUrl: './regatas.component.html',
  styleUrls: ['./regatas.component.css']
})
export class RegatasComponent implements OnInit {
  
  roupas:any = [
    {
      img:'assets/regatas/Regata esportiva basquete.png',
      produto: 'Regata esportiva basquete'
    },
    {
      img:'assets/regatas/Regata esportiva basquete 2.png',
      produto: 'Regata esportiva basquete 2'
    },
    {
      img:'assets/regatas/Regata esportiva com capuz.png',
      produto: 'Regata esportiva com capuz'
    },
    {
      img:'assets/regatas/Regata lisa verde alça fina.png',
      produto: 'Regata lisa verde alça fina'
    },
    {
      img:'assets/regatas/Regata Ocasional .png',
      produto: 'Regata Ocasional '
    },
    {
      img:'assets/regatas/Regata tricolor.png',
      produto: 'Regata tricolor'
    },
    {
      img:'assets/regatas/Regata tropical estampada.png',
      produto: 'Regata tropical estampada'
    },
    {
      img:'assets/regatas/Regata tropical estampada 2.png',
      produto: 'Regata tropical estampada 2'
    },
    {
      img:'assets/regatas/Regata tropical ocasional.png',
      produto: 'Regata tropical ocasional'
    },
    {
      img:'assets/regatas/Regata tropical férias.png',
      produto: 'Regata tropical férias'
    },
    {
      img:'assets/regatas/Regata Multicolorida.png',
      produto: 'Regata Multicolorida'
    },
    {
      img:'assets/regatas/Regata brilho festa.png',
      produto: 'Regata brilho festa'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
