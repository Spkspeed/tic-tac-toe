import { Component , OnInit} from '@angular/core';
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

startGame(): void{
  this.game.gameStart();
  
}

async clickSpan( card: any): Promise<void>{
  if(this.game.gameStatus === 1){
    const position = 
    console.log("The game start");
    
  }
}
ngOnInit(){}

}
