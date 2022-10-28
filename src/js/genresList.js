import genres from "../data/genres.json"

  function checkGenre(id)
  {
   return genres.genres.filter(genre=>id===genre.id)
  }
  export default function listOfGenres(list)
  {
    newList=[]
    list.map(item=>{
      newList.push(checkGenre(item)[0].name)
    })
    console.log(newList)
    if (newList.length>3)
    {
      newList=newList.slice(0,2)
      newList.push("Other")
      console.log(newList)
    }
    return newList;
  }
  