import React from 'react';

import HomeMenu from "../HomeMenu/HomeMenu";
import PrivateRoomConfig from "../PrivateRoomConfig/PrivateRoomConfig";
import WaitingScreen from "../WaitingScreen/WaitingScreen";
import GameView from "../GameView/GameView";

const AppRouter = () => {
    const home = <HomeMenu/>
    const privateRoomConfig = <PrivateRoomConfig/>
    const waitingScreen = <WaitingScreen/>
    const gameView = <GameView/>
    return gameView;
}

export default AppRouter
