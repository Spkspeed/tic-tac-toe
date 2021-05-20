import { Component , OnInit} from '@angular/core';
import { never } from 'rxjs';
import { GameLogic } from './game-logic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameLogic],
})
export class AppComponent implements OnInit{
constructor(public game: GameLogic){

}
htmlStr: string = 'Presione el boton para comenzar'
startGame(): void{
  this.game.gameStart();
  this.htmlStr = 'El turno es del jugador ' + this.game.currentTurn;

  
}
Onclick(event: any){
}
async clickSpan( span: any ): Promise<void>{
  if(this.game.gameStatus === 1){
    const position = {
      alignment: span.target.getAttribute('position')
    };
    console.log(position);
  }
}
ngOnInit(){}

}
