import React, {PropsWithChildren, ReactPropTypes} from 'react'
import styles from './PrivateRoomConfig.module.css'

const Title = () => {
    return <div className={styles.titleContainer}>
        <h2>Room Settings</h2>
    </div>
}

const SettingList: React.FunctionComponent = (props) => {
    return <div className={styles.settingsListContainer}>
        {props.children}
    </div>
}

const SettingListItem: React.FunctionComponent = (props) => {
    return <div className={styles.settingListItem}>
        {props.children}
    </div>
}

const ChatModeOption = () => {
    return <div>
        <button>Text Chat</button>
        <button>Voice Chat</button>
    </div>
}

const TurnTimeSelector = () => {
    return <div>
        <label>Turn Time: </label>
        <input type={"number"} defaultValue={30}/>
    </div>
}

const StartButton = () => {
    return <button>Start!</button>
}

const PrivateRoomConfig = () => {
    return <div className={styles.configViewContainer}>
        <Title/>
        <SettingList>
            <SettingListItem><ChatModeOption/></SettingListItem>
            <SettingListItem><TurnTimeSelector/></SettingListItem>
            <SettingListItem><StartButton/></SettingListItem>
        </SettingList>
    </div>
}

export default PrivateRoomConfig
