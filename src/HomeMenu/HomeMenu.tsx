import React from 'react';

const MenuItem: React.FunctionComponent = (props) => {
    return <div>{props.children}</div>
}

const PlayerNameInput = () => {
    return <input type="text" placeholder={"Enter player name"}/>
}

const HostPrivateGameOption = () => {
    return <button>Host Private Game</button>
}

const JoinRandomGameOption = () => {
    return <button>Random Game</button>
}

const JoinRoomCodeOption = () => {
    return <div>
        <input type="text" placeholder="Enter room code"/>
        <button>Enter</button>
    </div>
}

const HomeMenu = () => {
    return <div>
        <PlayerNameInput/>
        <HostPrivateGameOption/>
        <JoinRandomGameOption/>
        <JoinRoomCodeOption/>
    </div>
}

export default HomeMenu
