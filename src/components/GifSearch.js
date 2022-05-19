import React,{useState} from "react";

function GifSearch({onSubmitForm}){
  const [search, setSearch] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    onSubmitForm(search)
  }

  return(
    <div className="col-md-4">
      <form onSubmit={handleSubmit} >
        <label>Enter a search term</label><br/>
        <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        /><br/><br/>
        <input type="submit" value="Find GIFs" className="btn-primary"/>
      </form>
    </div>
  )
}

export default GifSearch