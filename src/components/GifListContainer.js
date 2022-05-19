import React,{ useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
  const [gifs, setGifs] = useState(null)

  const handleSearch = (searchValue) =>{
    const key = "bv3u0v1P7v0XrqcpEgfTnb2L0OhDlolP"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchValue}&limit=3&rating=g`
    fetch(url)
    .then(res=>res.json())
    .then(data => setGifs(data))
  }
  console.log(gifs)

  return(
    <div className="container">
      <div className="row">
        {gifs && <GifList gifs={gifs.data} />}
        <GifSearch onSubmitForm={handleSearch} />
      </div>
    </div>
  )

}

export default GifListContainer