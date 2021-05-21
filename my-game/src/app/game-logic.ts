import { Status } from "./gamestatus";

export class GameLogic {
    gameField: Array<number> = [];
    currentTurn: number | undefined;
    gameStatus: Status;
    public constructor(){
        this.gameStatus = Status.STOP;
        this.gameField = [0,0,0,0,0,0,0,0,0];
    }

    gameStart(): void{
        this.gameField = [0,0,0,0,0,0,0,0,0];
        this.currentTurn = this.randomPlayerStart();
        this.gameStatus = Status.START;
        console.log("the game is running")
    }

    randomPlayerStart(): number{
        const startPlayer =  Math.floor(Math.random() * 2) + 1;
        return startPlayer;
    }

    setSpan(position: number, value: number): void{
        this.gameField[position] = value;
    }



    getPlayerColor(): string {
        const colorClass = (this.currentTurn === 2) ? 'card-red' : 'card-blue';
        return colorClass;
    }
    

}