const api_key = 'vnzhHNGuYmXU8DnBEIY8YN87XOIBR6YA';
const giphy_url = 'api.giphy.com/v1/gifs/translate';
const search = document.getElementById('search');
var requestImage = `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=`;
const getImage = document.getElementById('get');
const img = document.querySelector('img');



// console.log(requestCats);
// console.log('https://api.giphy.com/v1/gifs/translate?api_key=vnzhHNGuYmXU8DnBEIY8YN87XOIBR6YA&s=cats')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=vnzhHNGuYmXU8DnBEIY8YN87XOIBR6YA&s=dogs', {mode: 'cors'})
.then(function(response) {
  return response.json();
}).then(function(response) {
  img.src = response.data.images.original.url   ;
}).catch((error) => {console.log('No Images Found')});

getImage.addEventListener('click', () => {
  const searchTerm = search.value
  fetch(`${requestImage}${searchTerm}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  }).then(function(response) {
    img.src = response.data.images.original.url   ;
  }).catch((error) => {console.log('No Images Found')});
})

