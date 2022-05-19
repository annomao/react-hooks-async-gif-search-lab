import React from "react";

function GifList({gifs}){
  const gifList = gifs.map(gif => {
    return (<li key={gif.id}>
      <img src={gif.images.original.url} alt={gif.title}/>
    </li>)
  })
  return(
    <div className="col-md-8">
      <ul>
        {gifList}
      </ul>
    </div>
  )
}

export default GifList