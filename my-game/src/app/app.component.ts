import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { GameLogic } from './game-logic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameLogic],
})
export class AppComponent implements OnInit {
  constructor(public game: GameLogic) {

  }
  htmlStr: string = 'Presione el boton para comenzar';
  htmlStr1: number = 0;

  startGame(): void {
    this.game.gameStart();
    this.htmlStr = 'El turno es del jugador ' + this.game.currentTurn;
    console.log("es el turno del jugador numero " + this.game.currentTurn);
  }
  async clickSpan(span: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      let className: string = span.currentTarget.getAttribute('class');
      console.log("el nombre de la clase es: " + className);

      if (className == "card") {
        const valor: number = span.currentTarget.getAttribute('position');
        console.log("la posicion del cuadrado es: " + valor);

        const colorClass = this.game.getPlayerColor();

        this.game.setSpan(valor, this.game.currentTurn);
        span.currentTarget.classList.replace(className, colorClass);

        if(this.game.checkIfTheSpansAreFull()){
          this.htmlStr1 = 1;
          this.htmlStr = "las cuadriculas se llenaron sin ganador, es un empate"
        }
        this.game.checkIfTheGameEnd(valor, colorClass);
        this.game.changePlayer();

      } else if (className == "player1") {
        console.log("el cuadrado ya ha sido clickeado anteriormente");
      } else if (className == "player2") {
        console.log("el cuadrado ya ha sido clickeado anteriormente");
      } else {
        console.log("no has clickeado ningun cuadrado");
      }

      if (this.game.gameStatus == 1) {
        this.htmlStr = 'El turno es del jugador ' + this.game.currentTurn;

      }

    }
  }
  //por razones que desconozco esto es necesario para que el programa funcione
  ngOnInit() { }
}
