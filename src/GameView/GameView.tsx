import React from 'react'

type FaceContainerProps = {
    image: String,
    name: String,
}

const FacesGrid = (faces: FaceContainerProps[]) => {
    return faces.map((face, idx) =>
        <div key={idx}>
            <FaceContainer image={face.image} name={face.name}/>
        </div>
    );
}

const FaceContainer = ({image, name}: FaceContainerProps) => {
    return <div>
        {image}
        {name}
    </div>
}

const GameView = () => {
    return <div>

    </div>
}

export default GameView;

