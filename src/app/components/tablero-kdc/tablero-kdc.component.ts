import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdc-app-tablero-kdc',
  templateUrl: './tablero-kdc.component.html',
  styleUrls: ['./tablero-kdc.component.css']
})
export class TableroKdcComponent implements OnInit {

  casillas: number[] = Array.from({ length: 36 }, (_, i) => i + 1);
  numeroApostado: number | undefined;
  numeroCanica: number | undefined;
  resultado: string | undefined;

  ngOnInit(): void {
    // Puedes inicializar aquí lo que necesites al iniciar el componente
  }

  mezclarNumeros(): void {
    this.casillas.sort(() => Math.random() - 0.5);
  }

  lanzarCanica(): void {
    this.numeroCanica = Math.floor(Math.random() * this.casillas.length) + 1;
    if (this.numeroApostado === this.numeroCanica) {
      this.resultado = '¡Ganaste!';
    } else {
      this.resultado = 'Perdiste :v';
    }
  }
}