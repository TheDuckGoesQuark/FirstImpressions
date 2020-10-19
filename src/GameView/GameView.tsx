import React from 'react'

interface FaceContainerProps {
    image: string,
    name: string,
}

const FacesGrid: React.FC<{ faces: FaceContainerProps[] }> = ({faces}) => {
    const faceGrid = faces.map((face, idx) =>
        <div key={idx}>
            <FaceContainer image={face.image} name={face.name}/>
        </div>
    );
    return <div>{faceGrid}</div>;
}

const FaceContainer = ({image, name}: FaceContainerProps) => {
    return <div>
        {image}
        {name}
    </div>
}

function randomString(length: number) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

const generateFaces = (): Array<FaceContainerProps> => {
    let faces: Array<FaceContainerProps> = []
    let numFaces = 3 * 8;
    for (let i = 0; i < numFaces; i++) {
        faces.push({name: randomString(7), image: randomString(7)})
    }
    return faces;
}

const GameView = () => {
    let faces: Array<FaceContainerProps> = generateFaces();
    return <div>
        <FacesGrid faces={faces}/>
    </div>
}

export default GameView;

