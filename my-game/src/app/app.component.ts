import { createDirectiveDefinitionMap } from '@angular/compiler/src/render3/partial/directive';
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
htmlStr1: string = ""
htmlStr2: string = ""
htmlStr3: string = ""
htmlStr4: string = ""
htmlStr5: string = ""
htmlStr6: string = ""
htmlStr7: string = ""
htmlStr8: string = ""
htmlStr9: string = ""
htmlStr10: string = ""



startGame(): void{
  this.game.gameStart();
  this.htmlStr = 'El turno es del jugador ' + this.game.currentTurn;

  
}
Onclick(event: any){
}
async clickSpan( span: any ): Promise<void>{
  if(this.game.gameStatus === 1){
     var position = {
      var: span.target.getAttribute('position')
      
    };
    const valor = span.currentTarget.getAttribute('position');
    console.log(valor);

    const colorClass = this.game.getPlayerColor();
    span.currentTarget.classList.add(colorClass);


  }
}
ngOnInit(){}

}
