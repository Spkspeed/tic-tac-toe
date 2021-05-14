import { Status } from "./gamestatus";

export class GameLogic {
    gameField: Array<number> = [];
    gameTurn: number | undefined;
    gameStatus: Status;
    public constructor(){
        this.gameStatus = Status.STOP;
        this.gameField = [0,0,0,0,0,0,0,0,0];
    }

    gameStart(): void{
        this.gameField = [0,0,0,0,0,0,0,0,0];
        this.gameTurn = this.randomPlayerStart();
        this.gameStatus = Status.START;
    }

    randomPlayerStart(): number{
        const startPlayer =  Math.floor(Math.random() * 2) + 1;
        return startPlayer;
    }
    

}