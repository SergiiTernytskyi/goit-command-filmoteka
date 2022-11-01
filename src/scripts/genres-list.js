import genres from "../data/genres.json"
 
  function checkGenre(id)
  {
   return genres.genres.filter(genre=>id===genre.id)
  }
  export default function listOfGenres(list)
  {
    let newList=[]
    list.map(item=>{
      newList.push(checkGenre(item)[0].name)
    })
    if (newList.length>3)
    {
      newList=newList.slice(0,2)
      newList.push("Other")
    }
    if(newList.length===0)
    {
      newList.push("Other")
    }
    return newList.join(", ");
  }
