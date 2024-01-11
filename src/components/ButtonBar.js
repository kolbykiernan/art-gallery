const ButtonBar = ({artId, setArtId}) => {
    return(
        <div className="button-bar">
        <button 
            type = "button-bar"
            onClick={() => setArtId(artId - 5 )}
         >
            Way Back
        </button>

        <button className="button-bar"
            type = "button-bar"
            onClick={() => setArtId(artId - 1)}
         >
            Last Image
        </button>
        <button className="button-bar"
            type = "button-bar"
            onClick={() => setArtId(artId + 1)}
         >
            Next Image
        </button>

        <button className="button-bar"
            type = "button-bar"
            onClick={() => setArtId(artId + 5)}
         >
            Way Forward
        </button>
        </div>
    )
}

export default ButtonBar

