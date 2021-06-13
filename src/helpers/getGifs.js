  
  
  //hace petición a la Api, devuelve la respuesta (data) en un json
 export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BBfWfDdQG8IeCgwxRU6JVKVynznacrue`
    const resp = await fetch(url);
    const {data} = await resp.json();
// recorro la data y extraigo el id, title, imagen
    const gifs = data.map(img =>{
      return {
        id: img.id,
        title: img.title,
        url : img.images?.downsized_medium.url
      }
    })

    return gifs;
}
