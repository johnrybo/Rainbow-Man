interface IGameState {

    changeGameState: (gameState: "mainmenu" | "gameover" | "countdown" | "play") => void;
}
