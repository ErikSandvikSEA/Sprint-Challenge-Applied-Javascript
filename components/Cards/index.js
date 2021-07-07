// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// const getData = axios.get('https://lambda-times-backend.herokuapp.com/articles') 
// the data is an object with data and articles about the topics with articles inside that include headlines, author, and other info 
const cardContainer = document.querySelector('.cards-container')

const cardBuilder = (object) => {
//build the elements
     const card = document.createElement('div')
     const headline = document.createElement('div')
     const author = document.createElement('div')
     const imageContainer = document.createElement('div')
     const image = document.createElement('img')
     const authorsName = document.createElement('span')

//nest elements
     card.appendChild(headline)
     card.appendChild(author)
     author.appendChild(imageContainer)
     author.appendChild(authorsName)
     imageContainer.appendChild(image)

//add classes
     card.classList.add('card')
     headline.classList.add('headline')
     author.classList.add('author')
     imageContainer.classList.add('img-container')

//add content to elements
     headline.textContent = object.headline
     image.src = object.authorPhoto
     authorsName.textContent = `By ${object.authorName}`



     return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then(
          response => {
               const articleObjects = response.data.articles        
               // console.log(articleObjects)   
               for(topic in articleObjects){
                    const articles = articleObjects[topic]
                    articles.forEach(article => {
                       const card =  cardBuilder(article)
                       cardContainer.appendChild(card)
                    })
               }   
          }
     )
     .catch(
          console.log('error')
     )
     

