import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {
 
  roupas:any = [
    {
      img:'assets/conjuntos/Conjunto inverno basico com capuz.png',
      produto: 'Conjunto inverno basico com capuz'
    },
    {
      img:'assets/conjuntos/Conjunto inverno basico.png',
      produto: 'Conjunto inverno basico'
    },
    {
      img:'assets/conjuntos/Conjunto inverno Figura Cartas.png',
      produto: 'Conjunto inverno Figura Cartas'
    },
    {
      img:'assets/conjuntos/Conjunto inverno oriental.png',
      produto: 'Conjunto inverno oriental'
    },
    {
      img:'assets/conjuntos/Conjunto ocasional basico azul.png',
      produto: 'Conjunto ocasional basico azul'
    },
    {
      img:'assets/conjuntos/Conjunto ocasional basico estampa.png',
      produto: 'Conjunto ocasional basico estampa'
    },
    {
      img:'assets/conjuntos/Conjunto ocasional basico.png',
      produto: 'Conjunto ocasional basico'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias Floral azul&amarelo.png',
      produto: 'Conjunto Verão Férias Floral azul&amarelo'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias Floral azul.png',
      produto: 'Conjunto Verão Férias Floral azul'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias Floral.png',
      produto: 'Conjunto Verão Férias Floral'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias Multicolorido.png',
      produto: 'Conjunto Verão Férias Multicolorido'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias preto.png',
      produto: 'Conjunto Verão Férias preto'
    },
    {
      img:'assets/conjuntos/Conjunto Verão Férias regata.png',
      produto: 'Conjunto Verão Férias regata'
    },
        {
      img:'assets/conjuntos/Conjunto Verão listrado dourado.png',
      produto: 'Conjunto Verão listrado dourado'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
