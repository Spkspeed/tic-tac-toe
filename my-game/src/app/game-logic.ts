import { Status } from "./gamestatus";

export class GameLogic {
    gameField: Array<number> = [];
    currentTurn!: number;
    gameStatus: Status;

    variable0: string | undefined;
    variable1!: String;
    variable2!: String;
    variable3!: String;
    variable4!: String;
    variable5!: String;
    variable6!: String;
    variable7!: String;
    variable8!: String;
    public constructor() {
        this.gameStatus = Status.STOP;
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    gameStart(): void {
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.currentTurn = this.randomPlayerStart();
        this.gameStatus = Status.START;
        console.log("the game is running")
    }

    randomPlayerStart(): number {
        const startPlayer = Math.floor(Math.random() * 2) + 1;
        return startPlayer;
    }

    setSpan(position: number, value: number): void {
        this.gameField[position] = value;
    }


    getPlayerColor(): string {
        const colorClass = (this.currentTurn === 2) ? 'player2' : 'player1';
        return colorClass;
    }

    changePlayer(): void {
        this.currentTurn = (this.currentTurn === 2) ? 1 : 2;
    }

    checkIfTheSpansAreFull(): boolean {
        let spansFull = true;
        for (let position = 0; position < 9; position++) {
            const element = this.gameField[position];
            if (element === 0) {
                spansFull = false;
                return spansFull;
            }
        }
        return spansFull;
    }

    checkIfTheGameEnd(position: number, className: string): void {
        if (position == 0) {
            this.variable0 = className;
        } else if (position == 1) {
            this.variable1 = className;
        } else if (position == 2) {
            this.variable2 = className;
        } else if (position == 3) {
            this.variable3 = className;
        } else if (position == 4) {
            this.variable4 = className;
        } else if (position == 5) {
            this.variable5 = className;
        } else if (position == 6) {
            this.variable6 = className;
        } else if (position == 7) {
            this.variable7 = className;
        } else if (position == 8) {
            this.variable8 = className;
        }

        //player 1 need this for win
        if (this.variable0 === "player1" && this.variable1 === "player1" && this.variable2 === "player1") {
            
        } else if (this.variable3 === "player1" && this.variable4 === "player1" && this.variable5 === "player1") {
            console.log("player 1 win")
        } else if (this.variable6 === "player1" && this.variable7 === "player1" && this.variable8 === "player1") {
            console.log("player 1 win")
        }  else if (this.variable0 === "player1" && this.variable3 === "player1" && this.variable6 === "player1") {
            console.log("player 1 win")
        }  else if (this.variable1 === "player1" && this.variable4 === "player1" && this.variable7 === "player1") {
            console.log("player 1 win")
        }  else if (this.variable2 === "player1" && this.variable5 === "player1" && this.variable8 === "player1") {
            console.log("player 1 win")
        }  else if (this.variable0 === "player1" && this.variable4 === "player1" && this.variable8 === "player1") {
            console.log("player 1 win")
        }  else if (this.variable6 === "player1" && this.variable4 === "player1" && this.variable2 === "player1") {
            console.log("player 1 win")
        }  
        
        //player 2 need this for win
        if (this.variable0 === "player2" && this.variable1 === "player2" && this.variable2 === "player2") {
            console.log("player 2 win")
        } else if (this.variable3 === "player2" && this.variable4 === "player2" && this.variable5 === "player2") {
            console.log("player 2 win")
        } else if (this.variable6 === "player2" && this.variable7 === "player2" && this.variable8 === "player2") {
            console.log("player 2 win")
        }  else if (this.variable0 === "player2" && this.variable3 === "player2" && this.variable6 === "player2") {
            console.log("player 2 win")
        }  else if (this.variable1 === "player2" && this.variable4 === "player2" && this.variable7 === "player2") {
            console.log("player 2 win")
        }  else if (this.variable2 === "player2" && this.variable5 === "player2" && this.variable8 === "player2") {
            console.log("player 2 win")
        }  else if (this.variable0 === "player2" && this.variable4 === "player2" && this.variable8 === "player2") {
            console.log("player 2 win")
        }  else if (this.variable6 === "player2" && this.variable4 === "player2" && this.variable2 === "player2") {
            console.log("player 2 win")
        }  
    }

}