import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.css']
})
export class InfantilComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/infantil/Camisa AmongUs.png',
      produto: 'Camisa AmongUs'
    },
    {
      img:'assets/infantil/Camisa infantil desenho Dinossauro .png',
      produto: 'Camisa infantil desenho Dinossauro '
    },
    {
      img:'assets/infantil/Camisa infantil linha Dinossauro.png',
      produto: 'Camisa infantil linha Dinossauro'
    },
    {
      img:'assets/infantil/Camisa listrado ocasional.png',
      produto: 'Camisa listrado ocasional'
    },
    {
      img:'assets/infantil/camisa multicolorido.png',
      produto: 'camisa multicolorido'
    },
    {
      img:'assets/infantil/Camisa ocasional Anime.png',
      produto: 'Camisa ocasional Anime'
    },
    {
      img:'assets/infantil/Outfit infantil Dino.png',
      produto: 'Outfit infantil Dino'
    },
    {
      img:'assets/infantil/Outfit infantil Multicolorido.png',
      produto: 'Outfit infantil Multicolorido'
    },
    {
      img:'assets/infantil/Conjunto praia infantil gamer .png',
      produto: 'Conjunto praia infantil gamer'
    },
    {
      img:'assets/infantil/Conjunto praia infantil.png',
      produto: 'Conjunto praia infantil'
    },
    {
      img:'assets/infantil/Outfit infantil bloco de cores.png',
      produto: 'Outfit infantil bloco de cores'
    },
    {
      img:'assets/infantil/Blusa de frio infantil Japão.png',
      produto: 'Blusa de frio infantil Japão'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
