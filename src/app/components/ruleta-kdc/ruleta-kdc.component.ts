import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdc-app-ruleta-kdc',
  templateUrl: './ruleta-kdc.component.html',
  styleUrls: ['./ruleta-kdc.component.css']
})

export class RuletaKdcComponent implements OnInit {
  rotation = 0;
  rotationStyle = `rotate(${this.rotation}deg)`;
  animating = false;

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  tirarRuleta() {
    if (!this.animating) {
      this.animating = true;
      this.rotation += 720; // Cambia el valor según tus necesidades
      this.rotationStyle = `rotate(${this.rotation}deg)`;
      setTimeout(() => {
        this.animating = false;
      }, 5000); // La animación se detendrá después de 5 segundos
    }
    const audio = new Audio();
    audio.src= '../assets/sounds/ruletaSonido.wav';
    audio.load();
    audio.play();
  }

}
