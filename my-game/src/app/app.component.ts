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
  htmlStr: string = 'Presione el boton para comenzar'

  startGame(): void {
    this.game.gameStart();
    this.htmlStr = 'El turno es del jugador ' + this.game.currentTurn;
    console.log("es el turno del jugador numero " + this.game.currentTurn);
  }
  async clickSpan(span: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      const valor = span.currentTarget.getAttribute('position');
      console.log("la posicion del cuadrado es: " + valor);
      let className: String = span.currentTarget.getAttribute('class');
      console.log("el nombre de la clase es: " + className);
      const colorClass = this.game.getPlayerColor();

      if (className == "card") {
        this.game.setSpan(valor, this.game.currentTurn);
        span.currentTarget.classList.replace(className, colorClass);
        this.game.changePlayer();
      } else if (className == "player1") {
        console.log("el cuadrado ya ha sido clickeado anteriormente");
      } else if (className == "player2") {
        console.log("el cuadrado ya ha sido clickeado anteriormente");
      } else {
        console.log("no has clickeado ningun cuadrado");
      }
    }
  }
  ngOnInit() { }

}
