import React from 'react'
import styles from './GameView.module.css'
import zort from './faces/0.jpg'

interface FaceContainerProps {
    image: JSX.Element,
    name: string,
}

function randomString(length: number) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

const generateFaces = (): Array<FaceContainerProps> => {
    let faces: Array<FaceContainerProps> = []
    let numFaces = 3 * 8;
    for (let i = 0; i < numFaces; i++) {
        let imgElement = <img className={styles.faceImage} src={zort} alt={"zort"}/>
        faces.push({name: randomString(7), image: imgElement})
    }
    return faces;
}

const FacesGrid: React.FC<{ faces: FaceContainerProps[] }> = ({faces}) => {
    const faceGrid = faces.map((face, idx) =>
        <FaceContainer image={face.image} name={face.name}/>
    );
    return <div className={styles.faceGrid}>{faceGrid}</div>;
}

const PlayerOneFacesGrid = () => {
    return <div className={styles.playerOneBoardContainer}>
        <FacesGrid faces={generateFaces()}/>
    </div>
}

const PlayerTwoFacesGrid = () => {
    return <div className={styles.playerTwoBoardContainer}>
        <FacesGrid faces={generateFaces()}/>
    </div>
}


const FaceContainer = ({image, name}: FaceContainerProps) => {
    return <div className={styles.faceContainer}>
        {image}
        <span className={styles.faceName}>{name}</span>
    </div>
}

const GameView = () => {
    let faces: Array<FaceContainerProps> = generateFaces();
    return <div className={styles.container}>
        <div className={styles.boardViewContainer}>
            <PlayerTwoFacesGrid/>
            <PlayerOneFacesGrid/>
        </div>
    </div>
}

export default GameView;

