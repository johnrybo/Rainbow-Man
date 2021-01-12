interface IGameState {

    changeGameState: (gameState: "mainmenu" | "gameover" | "play") => void;
}
