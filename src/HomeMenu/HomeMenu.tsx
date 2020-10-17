import React from 'react';
import styles from './HomeMenu.module.css';

const MenuItem: React.FunctionComponent = (props) => {
    return <div className={styles.menuOptionContainer}>
        <div className={styles.menuOption}>
            {props.children}
        </div>
    </div>
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
    return <div className={styles.homeContainer}>
        <div className={styles.nameInputContainer}>
            <PlayerNameInput/>
        </div>
        <div className={styles.menuContainer}>
            <MenuItem><HostPrivateGameOption/></MenuItem>
            <MenuItem><JoinRandomGameOption/></MenuItem>
            <MenuItem><JoinRoomCodeOption/></MenuItem>
        </div>
    </div>
}

export default HomeMenu
