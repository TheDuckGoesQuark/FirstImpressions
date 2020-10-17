import React from 'react';

import HomeMenu from "../HomeMenu/HomeMenu";
import PrivateRoomConfig from "../PrivateRoomConfig/PrivateRoomConfig";

const AppRouter = () => {
    const home = <HomeMenu/>
    const privateRoomConfig = <PrivateRoomConfig/>
    return privateRoomConfig;
}

export default AppRouter
