const imageSize = {
    width: '1000px',
    height: '800px',
  };

function Gallery({primaryImage, artistDisplayName, title}){
    return (
        <div style={{'width': '100%'}}>
            <img src={primaryImage} alt={title} style={imageSize} />
            <p>{artistDisplayName}</p>
        </div>
    )
}


export default Gallery