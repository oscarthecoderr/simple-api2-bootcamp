//https://api.harvardartmuseums.org


document.querySelector('button').addEventListener('click',havardArt)

 let apiKey = '455aca05-2055-4ed6-a379-dcd901750975'
// let url =`https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=`

function havardArt(){
  let page = Math.floor(Math.random() * 20)
  console.log(page) 
  fetch(`https://api.harvardartmuseums.org/object?size=1&page=${page}&apikey=${apiKey}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    
    
    let classification = data.records[0].classification
    let title = data.records[0].title
    let url = data.records[0].images[0].baseimageurl
    document.querySelector('img').src = url
    document.querySelector('.title').innerText = title
    
    document.querySelector('.info').innerText = classification
    console.log(url)
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}                   